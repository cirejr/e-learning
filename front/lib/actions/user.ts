'use server';

import { z } from 'zod';
import { userSchema } from '../schemas/user';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const supabase = createClient();

export async function createUser(userData: z.infer<typeof userSchema>) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert({
        email: userData.email,
        first_name: userData.firstName,
        last_name: userData.lastName,
        role: userData.role,
        password: userData.password,
      })
      .select()
      .single();

    if (error) throw error;

    return { success: true };
  } catch (error) {
    return { error: error };
  } finally {
    revalidatePath('/admin/users', 'page');
  }
}
