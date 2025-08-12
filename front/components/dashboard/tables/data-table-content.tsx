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
import { DataTablePagination } from './data-table-pagination';
import { DataTableProps } from '@/lib/definitions/data-table';
import { TableOptions } from './table-options';
import SheetWrapper from '@/components/global/sheet-wrapper';
import CourseCreationForm from '../create-course-form';
import { UserForm } from '../admin/user-form';
import { User } from '@supabase/supabase-js';

export function DataTableContent<TData, TValue>({
  formType,
  columns,
  data,
  teachers,
  isStudent,
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
        {!isStudent && (
          <SheetWrapper
            title={
              formType == 'course'
                ? 'Créer une nouveau cours'
                : 'Créer un nouvel utilisateur'
            }
            triggerTitle={
              formType == 'course' ? 'Nouveau cours' : 'Nouvel utilisateur'
            }
          >
            {formType == 'course' ? (
              <CourseCreationForm teachers={teachers as User[]} />
            ) : (
              <UserForm />
            )}
          </SheetWrapper>
        )}
        {/* <ModalForm formType={formType} teachers={teachers} /> */}
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
            {table.getRowModel().rows?.length &&
            table.getRowModel().rows.length > 0 ? (
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
