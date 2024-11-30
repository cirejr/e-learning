'use server';

import { createClient } from '@/utils/supabase/server';

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
  const supabase = createClient();

  const { data, error } = await supabase
    .from('courses')
    .select(
      '*, profiles(first_name, last_name), module(*), enrollments(student_id)'
    )
    .eq('id', id);

  if (error) {
    throw error;
  }

  return data.length > 0 ? data[0] : null;
}

export async function getEnrolledCourses(studentId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('enrollments')
    .select(
      'courses(title, description, start_date, duration, code, profiles(first_name, last_name))'
    )
    .eq('student_id', studentId);

  if (error) {
    throw error;
  }

  const courses = data?.map((enrollment) => enrollment.courses) || [];

  return courses;
}

export async function getTeacherCourses(teacherId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('teacher_id', teacherId);

  if (error) {
    throw error;
  }

  return data.length > 0 ? data : null;
}
