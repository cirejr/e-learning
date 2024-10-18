'use server'

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function getCourses() {
  try {
    const response = await supabase.from('courses').select('*');
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getTeachers(){
  try {
    const response = await supabase.from('profiles').select().eq('role', 'teacher')
    return response.data
  } catch (error) {
    throw error
  }
}