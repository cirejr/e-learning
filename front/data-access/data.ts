'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const getAccessToken = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value;
  return accessToken;
};

export async function logout() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value;

  const res = await fetch(`${process.env.API_URL}/auth/logout`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');

  if (!res.ok) {
    return { error: 'Failed to logout' };
  }

  revalidatePath('/login');
}

export async function getUser() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value;

  const res = await fetch(`${process.env.API_URL}/users/current`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.user;
}

export async function getCourses() {
  const res = await fetch(`${process.env.API_URL}/courses`);
  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }
  const data = await res.json();
  return data.data;
}

export async function getTeachers() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value;

  const res = await fetch(`${process.env.API_URL}/users/teachers`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    return { error: 'Failed to fetch teachers', data: [] };
  }
  const data = await res.json();
  return data.data;
}
