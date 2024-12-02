'use client';

import {
  Atom,
  Bird,
  BookOpen,
  Bot,
  Camera,
  Code2,
  Eclipse,
  Frame,
  History,
  LifeBuoy,
  Map,
  PieChart,
  Rabbit,
  Send,
  Settings2,
  SquareTerminal,
  Star,
  Turtle,
} from 'lucide-react';

import { NavMain } from '@/components/dashboard/sidebar/nav-main';
import { NavProjects } from '@/components/dashboard/sidebar/nav-projects';
import { NavSecondary } from '@/components/dashboard/sidebar/nav-secondary';
import { NavUser } from '@/components/dashboard/sidebar/nav-user';
import { StorageCard } from '@/components/dashboard/sidebar/storage-card';
import { TeamSwitcher } from '@/components/dashboard/sidebar/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from '@/components/ui/sidebar';
import { Link } from 'next-view-transitions';
import { AcmeLogo } from '@/app/(template)/template/_components/acme-logo';
import { usePathname } from 'next/navigation';
import { getMenuList } from '@/lib/menu-list';
import LogoutButton from '../logout-button';
const data = {
  teams: [
    {
      name: 'Acme Inc',
      logo: Atom,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: Eclipse,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Rabbit,
      plan: 'Free',
    },
  ],
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
          icon: History,
          description: 'View your recent prompts',
        },
        {
          title: 'Starred',
          url: '#',
          icon: Star,
          description: 'Browse your starred prompts',
        },
        {
          title: 'Settings',
          url: '#',
          icon: Settings2,
          description: 'Configure your playground',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
          icon: Rabbit,
          description: 'Our fastest model for general use cases.',
        },
        {
          title: 'Explorer',
          url: '#',
          icon: Bird,
          description: 'Performance and speed for efficiency.',
        },
        {
          title: 'Quantum',
          url: '#',
          icon: Turtle,
          description: 'The most powerful model for complex computations.',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'API',
      url: '#',
      icon: Code2,
      items: [
        {
          title: 'Chat',
          url: '#',
        },
        {
          title: 'Completion',
          url: '#',
        },
        {
          title: 'Images',
          url: '#',
        },
        {
          title: 'Video',
          url: '#',
        },
        {
          title: 'Speech',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],

  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
  searchResults: [
    {
      title: 'Routing Fundamentals',
      teaser:
        'The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.',
      url: '#',
    },
    {
      title: 'Layouts and Templates',
      teaser:
        'The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.',
      url: '#',
    },
    {
      title: 'Data Fetching, Caching, and Revalidating',
      teaser:
        'Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.',
      url: '#',
    },
    {
      title: 'Server and Client Composition Patterns',
      teaser:
        'When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ',
      url: '#',
    },
    {
      title: 'Server Actions and Mutations',
      teaser:
        'Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.',
      url: '#',
    },
  ],
};

export function AppSidebar() {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href='/' className='my-1 flex items-center space-x-2'>
          <Camera className='h-6 w-6' />
          <span className='text-xl font-bold'>CFTS</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {menuList.map(({ groupLabel, menus }, idx) => (
          <SidebarItem key={idx}>
            <SidebarLabel>{groupLabel}</SidebarLabel>
            <NavMain items={menus} />
          </SidebarItem>
        ))}
        <SidebarItem className='mt-auto'>
          <SidebarLabel>Help</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
