import Link from 'next/link';
import { Camera, Newspaper } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='container py-12'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          <div className='space-y-4'>
            <Link href='/' className='flex items-center space-x-2'>
              <Camera className='h-6 w-6' />
              <span className='font-bold'>CFTS</span>
            </Link>
            <p className='text-sm text-muted-foreground'>
              Excellence in journalism and communication education since 1970.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3'>
            <div className='space-y-3'>
              <h4 className='text-sm font-medium'>Programs</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='/courses/journalism'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Journalism
                  </Link>
                </li>
                <li>
                  <Link
                    href='/courses/digital-media'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Digital Media
                  </Link>
                </li>
                <li>
                  <Link
                    href='/courses/broadcasting'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Broadcasting
                  </Link>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h4 className='text-sm font-medium'>Resources</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='/forum'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Student Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href='/library'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Digital Library
                  </Link>
                </li>
                <li>
                  <Link
                    href='/events'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h4 className='text-sm font-medium'>Contact</h4>
              <ul className='space-y-2 text-sm'>
                <li className='text-muted-foreground'>123 Education Street</li>
                <li className='text-muted-foreground'>New York, NY 10001</li>
                <li>
                  <Link
                    href='tel:+1234567890'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    (123) 456-7890
                  </Link>
                </li>
                <li>
                  <Link
                    href='mailto:info@journalismedu.com'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    info@journalismedu.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t pt-8'>
          <p className='text-center text-sm text-muted-foreground'>
            © {new Date().getFullYear()} School of Journalism & Communication.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
