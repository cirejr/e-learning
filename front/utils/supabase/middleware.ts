import { metadata } from './../../app/layout';
import { User } from '@/lib/definitions/user';
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');
  const isLoginPage = request.nextUrl.pathname === '/login';

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isLoginPage && user) {
    // If the user is logged in and tries to access the login page, redirect to appropriate dashboard

    const url = request.nextUrl.clone();
    url.pathname = user.role === 'admin' ? '/admin' : '/dashboard';
    return NextResponse.redirect(url);
  }

  if (isAdminPage || isDashboardPage) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    // If the user is trying to access /admin and they're not an admin
    if (isAdminPage && user.role !== 'admin') {
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard'; // Redirect to dashboard if not admin
      return NextResponse.redirect(url);
    }

    // If an admin is trying to access regular dashboard, redirect to admin dashboard
    if (isDashboardPage && user.role === 'admin') {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/'; // Redirect to admin dashboard
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}
