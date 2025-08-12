'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { getAccessToken } from './data';

export async function fetchCourses({
  page,
  searchQuery,
  selectedCategory,
  sortBy,
}: {
  page: number;
  searchQuery?: string;
  selectedCategory?: string;
  sortBy?: string;
}) {
  const supabase = createClient();
  const ITEMS_PER_PAGE = 9;
  const from = (page - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase.from('courses').select('*', { count: 'exact' });

  // Apply filters
  if (searchQuery) {
    query = query.ilike('title', `%${searchQuery}%`);
  }
  if (selectedCategory && selectedCategory !== 'all') {
    query = query.eq('category', selectedCategory);
  }

  // Apply sorting
  const sortDirection = sortBy?.startsWith('-') ? 'desc' : 'asc';
  const sortField = sortBy?.replace('-', '');
  if (sortField) {
    query = query.order(sortField, { ascending: sortDirection === 'asc' });
  }

  // Fetch the data
  query = query.range(from, to);
  const { data, error, count } = await query;

  if (error) {
    console.error('Error fetching courses:', error.message);
    return { courses: [], totalCourses: 0 };
  }

  return { courses: data, totalCourses: count || 0 };
}

export async function getCourseById(id: string) {
  const res = await fetch(`${process.env.API_URL}/courses/${id}`);

  if (!res.ok) {
    return { error: 'Failed to fetch course', data: null };
  }

  const data = await res.json();
  return data.data;
}

export async function getEnrolledCourses(studentId: string) {
  const accessToken = await getAccessToken();
  const res = await fetch(
    `${process.env.API_URL}/enrollments/student/${studentId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!res.ok) {
    return { error: 'Failed to fetch courses', data: [] };
  }
  const data = await res.json();
  return data.data.length > 0 ? data.data : null;
}

export async function getTeacherCourses(teacherId: string) {
  const accessToken = await getAccessToken();
  const res = await fetch(
    `${process.env.API_URL}/courses/teacher/${teacherId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!res.ok) {
    return { error: 'Failed to fetch courses', data: [] };
  }
  const data = await res.json();
  return data.data.length > 0 ? data.data : null;
}
