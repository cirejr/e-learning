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
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive>
          <Link color='foreground' href='/' aria-current='page'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <NextLink href='/about-us' isDisabled>
            About us
          </NextLink>
          <Chip
            size='sm'
            variant='flat'
            color='danger'
            className='ml-1 translate-y-[-10px]'
          >
            soon
          </Chip>
        </NavbarItem>
        <NavbarItem>
          <NextLink href='/courses' isDisabled>
            Courses
          </NextLink>
          <Chip
            size='sm'
            variant='flat'
            color='danger'
            className='ml-1 translate-y-[-10px]'
          >
            soon
          </Chip>
        </NavbarItem>
        <NavbarItem>
          <NextLink href='/contact' isDisabled>
            Contact us
          </NextLink>
          <Chip
            size='sm'
            variant='flat'
            color='danger'
            className='ml-1 translate-y-[-10px]'
          >
            soon
          </Chip>
        </NavbarItem>
        <NavbarItem>
          <Link href='/admin'>Dashboard</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className='gap-2'>
        <NavbarItem className='hidden lg:flex'>
          <Button
            asChild
            variant={'secondary'}
            className='bg-primary-foreground text-primary '
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
