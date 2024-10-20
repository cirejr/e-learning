'use client';

import React from 'react';
import { flexRender } from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import ModalForm from '../modal-form';
import { DataTablePagination } from './data-table-pagination';
import { DataTableProps } from '@/lib/definitions/data-table';
import { TableOptions } from './table-options';

export function DataTableContent<TData, TValue>({
  formType,
  columns,
  data,
  teachers,
}: DataTableProps<TData, TValue>) {
  const table = TableOptions({ columns, data });

  return (
    <div>
      <div className='flex items-center justify-between py-4'>
        <Input
          placeholder='Rechercher'
          value={(table.getState().globalFilter as string) ?? ''}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className='max-w-sm'
        />
        <ModalForm formType={formType} teachers={teachers} />
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 rounded-b-lg bg-white py-4'>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
