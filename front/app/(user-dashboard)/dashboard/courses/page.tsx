import React from 'react';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import { columns } from '@/components/dashboard/tables/courses/columns';
import { DataTableContent } from '@/components/dashboard/tables/data-table-content';
import { getCourses, getTeachers, getUser } from '@/data-access/data';
import { Course } from '@/lib/definitions/course';
import { User } from '@supabase/supabase-js';
import { getEnrolledCourses, getTeacherCourses } from '@/data-access/courses';

export default async function Courses() {
  const [teachers, courses] = await Promise.all([getTeachers(), getCourses()]);
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Mes Cours'>
      {(user: User) => (
        <main>
          {user.role == 'teacher' ? (
            <TeacherCourses teachers={teachers} userId={user.id} />
          ) : (
            <StudentCourses teachers={teachers} userId={user.id} />
          )}
        </main>
      )}
    </ContentLayout>
  );
}

async function TeacherCourses({
  teachers,
  userId,
}: {
  teachers: User[];
  userId: string;
}) {
  const courses = await getTeacherCourses(userId);
  return (
    <DataTableContent
      columns={columns}
      data={courses as unknown as Course[]}
      formType='course'
      teachers={teachers}
    />
  );
}

async function StudentCourses({
  teachers,
  userId,
}: {
  teachers: User[];
  userId: string;
}) {
  const courses = await getEnrolledCourses(userId);
  return (
    <DataTableContent
      columns={columns}
      data={courses as unknown as Course[]}
      formType='course'
      teachers={teachers}
      isStudent={true}
    />
  );
}
