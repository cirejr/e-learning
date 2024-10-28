import { createClient } from '@/utils/supabase/server';

export default async function getPrograms() {
  const supabase = createClient();

  const { data, error } = await supabase.from('programs').select('*');

  if (error) {
    throw error;
  }
  return data;
}
