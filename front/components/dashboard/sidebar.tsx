import { PanelsTopLeft } from 'lucide-react';

import { Link } from 'next-view-transitions';
import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';
import { Button } from '@/components/ui/button';
import { Menu } from '@/components/dashboard/menu';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { SidebarToggle } from '@/components/dashboard/sidebar-toggle';
import { AcmeLogo } from '../global/acme-logo';

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300',
        sidebar?.isOpen === false ? 'w-[90px]' : 'w-72'
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className='relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800'>
        <Button
          className={cn(
            'transition-transform ease-in-out duration-300 mb-1',
            sidebar?.isOpen === false ? 'translate-x-1' : 'translate-x-0'
          )}
          variant='link'
          asChild
        >
          <Link href='/' className='flex items-center gap-2'>
            <AcmeLogo />
            <h1
              className={cn(
                'font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300',
                sidebar?.isOpen === false
                  ? '-translate-x-96 opacity-0 hidden'
                  : 'translate-x-0 opacity-100'
              )}
            >
              E-Learning
            </h1>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}