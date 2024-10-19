'use client';

import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';
import { Sidebar } from '@/components/dashboard/sidebar';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  return (
    <main>
      <Sidebar />
      <div
        className={cn(
          'min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
          sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
        )}
      >
        {children}
      </div>
    </main>
  );
}
