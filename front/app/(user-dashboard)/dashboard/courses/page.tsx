import React from 'react';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import { columns } from '@/components/dashboard/tables/courses/columns';
import { DataTableContent } from '@/components/dashboard/tables/data-table-content';
import { getCourses, getTeachers } from '@/data-access/data';
import { Course } from '@/lib/definitions/course';
import { User } from '@/lib/definitions/user';

export default async function Courses() {
  //const courses = await getCourses() as unknown as Course[]
  const [teachers, courses] = (await Promise.all([
    getTeachers(),
    getCourses(),
  ])) as [User[], Course[]];
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Courses'>
      <main>
        <DataTableContent
          columns={columns}
          data={courses}
          formType='course'
          teachers={teachers}
        />
      </main>
    </ContentLayout>
  );
}
