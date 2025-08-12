import { sendCredententials } from '@/lib/actions/email';
import { generatePassword } from '@/lib/utils';
import { createAdminClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value;
  const userData = await request.json();
  const password = generatePassword();
  userData.password = password;

  try {
    const res = await fetch(`${process.env.API_URL}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    console.log('data', data);

    const name = userData.first_name + ' ' + userData.last_name;

    await sendCredententials(name, userData.email, password);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error }), {
      status: 500,
    });
  } finally {
    revalidatePath('/admin/users');
  }
}
