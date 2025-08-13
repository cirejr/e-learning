'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { courseSchema } from '../schemas/course';
import { generateCourseCode } from '../utils';
import { getAccessToken } from '@/data-access/data';

const supabase = createClient();

export async function createCourse(courseData: z.infer<typeof courseSchema>) {
  const accessToken = await getAccessToken();

  const dataToSend = {
    code: generateCourseCode(courseData.title),
    ...courseData,
  };
  try {
    const res = await fetch(`${process.env.API_URL}/courses/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(dataToSend),
    });

    if (res.ok) {
      return { success: true, message: 'Course created successfully' };
    } else {
      return { message: res.statusText };
    }
  } catch (error) {
    return { error: error };
  } finally {
    revalidatePath('/admin/courses', 'page');
  }
}

export async function updateCourse(
  courseId: string,
  courseData: z.infer<typeof courseSchema>
) {
  const dataToSend = {
    code: generateCourseCode(courseData.title),
    ...courseData,
  };
  try {
    const response = await supabase
      .from('courses')
      .update({
        title: courseData.title,
        description: courseData.description,
        url: courseData.url,
        code: dataToSend.code,
        start_date: courseData.start_date,
        end_date: courseData.end_date,
        teacher_id: courseData.teacher_id,
      })
      .eq('id', courseId);

    if (response.status == 204) {
      return { success: true };
    } else {
      return { error: response.error };
    }
  } catch (error) {
    return { error: error };
  } finally {
    revalidatePath('/admin/courses', 'page');
  }
}

export async function deleteCourse(courseId: number | string) {
  const accessToken = await getAccessToken();

  try {
    const res = await fetch(`${process.env.API_URL}/courses/${courseId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      return { success: true, message: 'Course deleted successfully' };
    } else {
      return { message: res.statusText };
    }
  } catch (error) {
    return error;
  } finally {
    revalidatePath('/admin/courses', 'page');
  }
}

export async function enrollUser(courseId: string) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.from('enrollments').insert({
      course_id: courseId,
      student_id: (await supabase.auth.getUser()).data.user?.id,
    });

    if (error) {
      console.log('error:', error);
      return { error: error };
    }
    return { success: true };
  } catch (error) {
    console.log('error:', error);
    return { error: error };
  } finally {
    revalidatePath('/courses', 'page');
  }
}
