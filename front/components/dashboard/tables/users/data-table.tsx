import React from 'react';
import { DataTableContent } from '../data-table-content';
import { DataTableProps } from '@/lib/definitions/data-table';

export default function UsersTable<TData, TValue>({
  columns,
  data,
  ...props
}: DataTableProps<TData, TValue>) {
  return <DataTableContent columns={columns} data={data} {...props} />;
}
