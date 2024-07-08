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

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/admin',
          label: 'Dashboard',
          active: pathname === '/admin',
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '/admin/users',
          label: 'users',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: [],
        },
        {
          href: '',
          label: 'Courses',
          active: pathname.includes('/courses'),
          icon: Bookmark,
          submenus: [
            {
              href: '/admin/courses',
              label: 'All Courses',
              active: pathname === '/admin/courses',
            },
            {
              href: '/admin/courses/create',
              label: 'New Course',
              active: pathname === '/admin/courses/create',
            },
          ],
        },
        {
          href: '/admin/content-management',
          label: 'Content Management',
          active: pathname.includes('/content-management'),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        /* {
          href: '/users',
          label: 'Users',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: [],
        }, */
        {
          href: '/admin/account',
          label: 'Account',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
