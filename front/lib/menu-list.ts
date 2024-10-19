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
}
