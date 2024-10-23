import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
} from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  if (pathname.includes('admin')) {
    return [
      {
        groupLabel: 'Contents',
        menus: [
          {
            href: '/admin',
            label: 'Dashboard',
            active: pathname === '/admin',
            icon: LayoutGrid,
            submenus: [],
          },
          {
            href: '/admin/users',
            label: 'users',
            active: pathname.includes('/users'),
            icon: Users,
            submenus: [],
          },
          {
            href: '/admin/courses',
            label: 'Courses',
            active: pathname.includes('/courses'),
            icon: Bookmark,
            submenus: [],
          },
          /* {
            href: '/admin/content-management',
            label: 'Content Management',
            active: pathname.includes('/content-management'),
            icon: Tag,
            submenus: [],
          }, */
        ],
      },
      /*  {
        groupLabel: 'Settings',
        menus: [
          {
            href: '/admin/account',
            label: 'Account',
            active: pathname.includes('/account'),
            icon: Settings,
            submenus: [],
          },
        ],
      }, */
    ];
  } else {
    return [
      {
        groupLabel: 'Contents',
        menus: [
          {
            href: '/dashboard',
            label: 'Dashboard',
            active: pathname === '/dashboard',
            icon: LayoutGrid,
            submenus: [],
          },
          {
            href: '/dashboard/courses',
            label: 'Courses',
            active: pathname.includes('/courses'),
            icon: Bookmark,
            submenus: [],
          },
          {
            href: '/dashboard/my-posts',
            label: 'Mes Posts',
            active: pathname.includes('/my-posts'),
            icon: Tag,
            submenus: [],
          },
        ],
      },
      {
        groupLabel: 'Settings',
        menus: [
          {
            href: '/dashboard/account',
            label: 'Compte',
            active: pathname.includes('/account'),
            icon: Settings,
            submenus: [],
          },
        ],
      },
    ];
  }
}
