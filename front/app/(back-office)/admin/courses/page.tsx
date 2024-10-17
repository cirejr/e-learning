import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import { columns } from '@/components/dashboard/tables/courses/columns';
import { DataTableContent } from '@/components/dashboard/tables/data-table-content';
import { Course } from '@/lib/definitions/course';
import { createClient } from '@/utils/supabase/server';
import React from 'react';



async function getCourses() {
  'use server';
  const supabase = createClient();
  try {
    const response = await supabase.from('courses').select('*');
    return response.data;
  } catch (error) {
    return error;
  }
}

export default async function Courses() {
  const courses = await getCourses() as unknown as Course[] 
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Courses'>
      <main>
        <DataTableContent columns={columns} data={courses} formType='course' />
      </main>
    </ContentLayout>
  );
}


