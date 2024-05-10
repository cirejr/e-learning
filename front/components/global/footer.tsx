'use client';
import React from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Icons } from '../ui/icons';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/react';
import { Button } from '../ui/button';
import { Link } from 'next-view-transitions';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
} from '../ui/navigation-menu';
import FooterImageCard from './footer-image-card';
import { usefullLinks } from './config';
import FooterLogo from './footer-logo';

const socialIcons = [
  { icon: <Icons.gitHub />, href: '#' },
  { icon: <Icons.twitter />, href: '#' },
  { icon: <Icons.ig />, href: '#' },
  { icon: <Icons.in />, href: '#' },
];

export default function Footer() {
  return (
    <main className='w-full p-6 dark bg-slate-950 '>
      <Card className='dark rounded-none border-none mt-10'>
        <CardContent className='flex flex-col gap-6 md:gap-1 md:flex-row justify-between'>
          <div className='mt-6'>
            <FooterLogo />
          </div>
          <div className='flex w-full md:w-2/3 justify-center gap-4'>
            {usefullLinks.map((link, index) => (
              <Listbox key={index}>
                <ListboxSection title={link.headTitle}>
                  {link.submenu.map((submenu) => (
                    <ListboxItem
                      variant='faded'
                      className='hover:rounded-sm'
                      key={submenu.href}
                      href={submenu.href}
                    >
                      {submenu.title}
                    </ListboxItem>
                  ))}
                </ListboxSection>
              </Listbox>
            ))}
          </div>
        </CardContent>
        <CardFooter className='justify-between'>
          <span>© 2022 Ed-Circle. All rights reserved.</span>
          <div className='flex items-center gap-2'>
            {socialIcons.map((social) => (
              <Button size='icon' className='rounded-full' asChild>
                <Link href={social.href}>{social.icon}</Link>
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
