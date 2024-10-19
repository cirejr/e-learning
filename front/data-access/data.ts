'use server';

import { createClient } from '@/utils/supabase/server';
import { createClient as createClientCSR } from '@/utils/supabase/server';

const supabasessr = createClient();
const supabasecsr = createClientCSR();

export async function getUser() {
  const res = await supabasecsr.auth.getUser();

  if (res.error) {
    return res.error;
  }
  return res.data;
}

export async function getSession() {
  const res = await supabasecsr.auth.getSession();

  if (res.error) {
    return res.error;
  }
  return res.data;
}

export async function getCourses() {
  try {
    const response = await supabasessr.from('courses').select('*');
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getTeachers() {
  try {
    const response = await supabasessr
      .from('profiles')
      .select()
      .eq('role', 'teacher');
    return response.data;
  } catch (error) {
    throw error;
  }
}
