'use server';

import { z } from 'zod';
import { userSchema } from '../schemas/user';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { sendCredententials } from './email';

const supabase = createClient();

export async function createUser(userData: z.infer<typeof userSchema>) {
  const password = generatePassword();
  try {
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password,
      options: {
        data: {
          first_name: userData.first_name,
          last_name: userData.last_name,
          role: userData.role,
        },
      },
    });

    if (error) throw error;
    const name = `${userData.first_name} ${userData.last_name}`;
    await sendCredententials(name, userData.email, password);

    return { success: true, data };
  } catch (error) {
    return { error: error };
  } finally {
    revalidatePath('/admin/users', 'page');
  }
}

function generatePassword() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 12;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function signUp(formData: FormData) {
  const dataToSend = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { data, error } = await supabase.auth.signUp(dataToSend);

  if (error) {
    console.log('error', error);
    throw error;
  }

  return data;
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
