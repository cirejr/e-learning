import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
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
        <NavbarItem>
          <Link color='foreground' href='#'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#'>Courses</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#'>Contact us</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/login'>Login</Link>
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
