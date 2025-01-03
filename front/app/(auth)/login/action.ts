'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function login(formData: FormData) {
  const supabase = createClient();

  const dataToSend = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };
  try {
    const { data: authData, error } = await supabase.auth.signInWithPassword(
      dataToSend
    );

    if (error) {
      return { error: error.message };
    }

    return { success: true, user: authData.user };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unknown error occurred' };
  } finally {
    redirect('/dashboard');
  }
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
