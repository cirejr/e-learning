'use server';

import { z } from 'zod';
import { userSchema } from '../schemas/user';
import { createAdminClient, createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { sendCredententials } from './email';

export async function signUp(formData: FormData) {
  const supabase = createClient();
  const dataToSend = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { data, error } = await supabase.auth.signUp(dataToSend);

  if (error) {
    throw error;
  }

  return data;
}

export async function updateUser(
  userId: string,
  data: z.infer<typeof userSchema>
) {
  const supabase = createClient();
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
  const supabase = createClient();
  try {
    const res = await supabase.from('profiles').delete().eq('id', userId);
    return res;
  } catch (error) {
    return error;
  } finally {
    revalidatePath('/admin/users', 'page');
  }
}
