'use server';

import { z } from 'zod';
import { userSchema } from '../schemas/user';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { error } from 'console';

const supabase = createClient();

export async function createUser(userData: z.infer<typeof userSchema>) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert({
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
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

export async function updateUser(
  userId: string,
  data: z.infer<typeof userSchema>
) {
  try {
    const response = await supabase
      .from('profiles')
      .update(data)
      .eq('id', userId);

    if (response.status == 204) {
      return { success: true };
    } else {
      return { error: response.error };
    }
  } catch (error) {
    return { error: error };
  } finally {
    revalidatePath('/admin/users', 'page');
  }
}

export async function deleteUser(userId: string) {
  try {
    const res = await supabase.from('profiles').delete().eq('id', userId);
    return res;
  } catch (error) {
    return error;
  } finally {
    revalidatePath('/admin/users', 'page');
  }
}
