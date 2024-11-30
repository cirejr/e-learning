import { ModeToggle } from '@/components/global/mode-toggle';
import { UserNav } from '@/components/dashboard/user-nav';
import { SheetMenu } from '@/components/dashboard/sheet-menu';
import { SidebarTrigger } from '../ui/sidebar';
import { User } from '@supabase/supabase-js';

interface NavbarProps {
  breadcrumb: React.ReactNode;
  user?: User;
}

export function Navbar({ breadcrumb, user }: NavbarProps) {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur dark:shadow-secondary'>
      <div className='mx-4 flex h-14 items-center'>
        <div className='flex items-center space-x-4 lg:space-x-0'>
          <SidebarTrigger />
          <h1 className='font-bold'>{breadcrumb}</h1>
        </div>
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <ModeToggle />
          <UserNav user={user as User} />
        </div>
      </div>
    </header>
  );
}
