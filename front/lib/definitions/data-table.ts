import { ColumnDef } from '@tanstack/react-table';
import { User } from './user';

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  formType: 'user' | 'course'
  teachers?: User[]
}
