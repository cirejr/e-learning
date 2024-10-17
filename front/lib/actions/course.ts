'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { courseSchema } from '../schemas/course';

const supabase = createClient();

export async function createCourse(courseData: z.infer<typeof courseSchema>) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .insert({
        title: courseData.title,
        description: courseData.description,
        url: courseData.url,
        code: courseData.code,
        start_date: courseData.start_date,
        end_date: courseData.end_date,
        teacher_id: courseData.teacher_id,
      })
      .select()
      .single();

    if (error) throw error;

    return { success: true };
  } catch (error) {
    return { error: error };
  } finally {
    revalidatePath('/admin/courses', 'page');
  }
}

export async function updateCourse(
  courseId: number,
  courseData: z.infer<typeof courseSchema>
) {
  try {
    const response = await supabase
      .from('courses')
      .update({
        title: courseData.title,
        description: courseData.description,
        url: courseData.url,
        code: courseData.code,
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

export async function deleteCourse(courseId: number) {
  try {
    const res = await supabase
      .from('courses')
      .delete()
      .eq('id', courseId);

    return res;
  } catch (error) {
    return error;
  } finally {
    revalidatePath('/admin/courses', 'page');
  }
}

