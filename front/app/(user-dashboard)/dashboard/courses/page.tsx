import React from 'react';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import { columns } from '@/components/dashboard/tables/courses/columns';
import { DataTableContent } from '@/components/dashboard/tables/data-table-content';
import { getCourses, getTeachers } from '@/data-access/data';
import { Course } from '@/lib/definitions/course';
import { User } from '@/lib/definitions/user';

export default async function Courses() {
  const [teachers, courses] = (await Promise.all([
    getTeachers(),
    getCourses(),
  ])) as [User[], Course[]];
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Courses'>
      {(user) => (
        <main>
          {user.user.role == 'teacher' ? (
            <TeacherCourses teachers={teachers} courses={courses} />
          ) : (
            <StudentCourses teachers={teachers} courses={[]} />
          )}
        </main>
      )}
    </ContentLayout>
  );
}

function TeacherCourses({
  courses,
  teachers,
}: {
  courses: Course[];
  teachers: User[];
}) {
  return (
    <DataTableContent
      columns={columns}
      data={courses}
      formType='course'
      teachers={teachers}
    />
  );
}

function StudentCourses({
  courses,
  teachers,
}: {
  courses: Course[];
  teachers: User[];
}) {
  return (
    <DataTableContent
      columns={columns}
      data={courses}
      formType='course'
      teachers={teachers}
    />
  );
}
