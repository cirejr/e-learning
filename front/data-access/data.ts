'use server';

import { createClient } from '@/utils/supabase/server';

export async function logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}

export async function getUserData() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

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

  const res = await supabase.auth.getUser();

  if (res.error) {
    return res.error;
  }
  return res.data;
}

export async function getCourses() {
  const supabase = createClient();

  try {
    const response = await supabase.from('courses').select('*');
    return response.data;
  } catch (error) {
    return error;
  }
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
