'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }

  revalidatePath('/login');
}

export async function getUserData() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log('user', user);

  if (!user) {
    return null;
  }

  const { data: userData, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error fetching user role:', error);
    return user;
  }

  return {
    ...user,
    profile: userData,
  };
}

export async function getUser() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    return null;
  }
  return data.user;
}

export async function getCourses() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*, profiles(first_name, last_name)');
  if (error) {
    return error;
  }
  return data;
}

export async function getTeachers() {
  const supabase = createClient();

  const { error, data } = await supabase
    .from('profiles')
    .select()
    .eq('role', 'teacher');

  if (error) {
    throw error;
  }

  return data;
}
