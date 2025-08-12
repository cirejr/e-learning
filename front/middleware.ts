import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser } from './data-access/data';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token');
  const user = await getUser();

  if (!token || !user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};
