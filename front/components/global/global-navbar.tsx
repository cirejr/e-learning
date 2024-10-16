'use client';
import React from 'react';
import {
  Chip,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextLink,
} from '@nextui-org/react';
import { AcmeLogo } from './acme-logo';
import { Button } from '../ui/button';
import { Link } from 'next-view-transitions';

export default function GlobalNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className='font-bold text-inherit'>ACME</p>
      </NavbarBrand>
      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <NextLink  href='/' aria-current='page'>
            Home
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href='/about-us'  >
            About us
          </NextLink>
            
        </NavbarItem>
        <NavbarItem>
          <NextLink href='/courses'  >
            Courses
          </NextLink>
            
        </NavbarItem>
        <NavbarItem>
          <NextLink href='/contact'  >
            Contact us
          </NextLink>
            
        </NavbarItem>
        <NavbarItem>
          <NextLink href='/admin'>Dashboard</NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className='gap-2'>
        <NavbarItem className='hidden lg:flex'>
          <Button
            asChild
            variant={'secondary'}
            className='bg-primary-foreground text-primary'
          >
            <Link href='/login'>Login</Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button asChild>
            <Link href='/register'>Create free account</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
