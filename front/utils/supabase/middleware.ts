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
  const isDashboardPage = request.nextUrl.pathname.startsWith('dashboard');
  /* 
  if (isAdminPage || isDashboardPage) {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    // Check the role in the user metadata (assuming role is stored here)
    const role = user?.user_metadata?.role;

    // If the user is trying to access /admin and they're not an admin
    if (isAdminPage && role !== 'admin') {
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard'; // Redirect to dashboard if not admin
      return NextResponse.redirect(url);
    }
  } */

  return supabaseResponse;
}
