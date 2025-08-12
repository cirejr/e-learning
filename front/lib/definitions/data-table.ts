import { User } from '@supabase/supabase-js';
import { ColumnDef } from '@tanstack/react-table';

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  formType: 'user' | 'course';
  teachers?: any;
  isStudent?: boolean;
}
