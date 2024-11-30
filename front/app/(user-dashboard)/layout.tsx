import { AppSidebar } from '@/components/dashboard/sidebar/app-sidebar';
import { SidebarLayout } from '@/components/ui/sidebar';

import '@/styles/globals.css';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cookies } = await import('next/headers');
  return (
    <SidebarLayout
      defaultOpen={cookies().get('sidebar:state')?.value === 'true'}
    >
      <AppSidebar />
      <main className='font-geist-sans flex flex-1 flex-col transition-all duration-300 ease-in-out'>
        {children}
      </main>
    </SidebarLayout>
  );
}
