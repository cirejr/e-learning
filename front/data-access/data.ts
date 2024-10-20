'use server';

import { createClient } from '@/utils/supabase/server';

const supabase = createClient();

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}

export async function getUserData() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const { data: userData, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', session.user.id)
    .single();

  if (error) {
    console.error('Error fetching user role:', error);
    return session.user;
  }

  return {
    ...session.user,
    user: userData,
  };
}

export async function getUser() {
  const res = await supabase.auth.getUser();

  if (res.error) {
    return res.error;
  }
  return res.data;
}

export async function getCourses() {
  try {
    const response = await supabase.from('courses').select('*');
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getTeachers() {
  const { error, data } = await supabase
    .from('profiles')
    .select()
    .eq('role', 'teacher');

  if (error) {
    throw error;
  }

  return data;
}
