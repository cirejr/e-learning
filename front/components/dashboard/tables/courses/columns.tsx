'use client';

import * as React from 'react';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { ColumnDef, RowData } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DataTableColumnHeader } from '../data-table-column-header';
import ModalForm from '../../modal-form';
import { DeleteModal } from '../../delete-modal';
import { Course } from '@/lib/definitions/course';
import { deleteCourse } from '@/lib/actions/course';

/* const nameAccessor = (row: any) => {
  let firstName = row.first_name;
  let lastName = row.last_name;

  console.log(row);
  return `${firstName} ${lastName}`;
}; */

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Description' />
    ),
    cell: ({ row }) => <div>{row.getValue('description')}</div>,
  } /* 
  {
    accessorKey: 'url',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='URL' />
    ),
    cell: ({ row }) => <div>{row.getValue('url')}</div>,
  }, */,
  {
    accessorKey: 'start_date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Start Date' />
    ),
    cell: ({ row }) => <div>{row.getValue('start_date')}</div>,
  },
  {
    accessorKey: 'duration',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Durée' />
    ),
    cell: ({ row }) => <div>{row.getValue('duration')}</div>,
  },
  {
    accessorKey: 'profiles',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Enseignant' />
    ),
    cell: ({ row }) => {
      return (
        <div>
          {row.original.teacher_first_name} {row.original.teacher_last_name}
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const course = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <ModalForm formType='course' course={course} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DeleteModal deleteFn={() => deleteCourse(course.id)} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
