import { ContentLayout } from '@/components/dashboard/content-layout';
import MainContent from '@/components/dashboard/admin/main-content';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { StudentDashboard } from './_components/student-dashboard';
import { TeacherDashboard } from './_components/teacher-dashboard';
import { User } from '@supabase/supabase-js';

export default function Dashboard() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title=''>
      {(user: User) => (
        <main className='container mx-auto px-4 py-8'>
          <h2 className='mb-6 text-3xl font-bold'>
            Welcome, {user.user_metadata.first_name}
            {user.user_metadata.last_name}
          </h2>
          {user.user_metadata.role === 'student' ? (
            <StudentDashboard />
          ) : (
            <TeacherDashboard />
          )}
        </main>
      )}
    </ContentLayout>
  );
}
