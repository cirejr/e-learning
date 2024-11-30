'use client';
import React from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/react';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';
import FooterLogo from '@/components/global/footer-logo';
import { usefullLinks } from './config';

const socialIcons = [
  { icon: <Icons.gitHub />, href: '#' },
  { icon: <Icons.twitter />, href: '#' },
  { icon: <Icons.ig />, href: '#' },
  { icon: <Icons.in />, href: '#' },
];

export default function Footer() {
  return (
    <main className='w-full bg-slate-950 p-6 dark'>
      <Card className='mt-10 rounded-none border-none dark'>
        <CardContent className='flex flex-col justify-between gap-6 md:flex-row md:gap-1'>
          <div className='mt-6'>
            <FooterLogo />
          </div>
          <div className='flex w-full justify-center gap-4 md:w-2/3'>
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
            {socialIcons.map((social, index) => (
              <Button key={index} size='icon' className='rounded-full' asChild>
                <Link href={social.href}>{social.icon}</Link>
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
