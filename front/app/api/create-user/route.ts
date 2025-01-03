import { sendCredententials } from '@/lib/actions/email';
import { generatePassword } from '@/lib/utils';
import { createAdminClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  const supabase = createAdminClient();
  const userData = await request.json();
  const password = generatePassword();

  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: userData.email,
      password,
      email_confirm: true,
      user_metadata: {
        first_name: userData.first_name,
        last_name: userData.last_name,
        role: userData.role,
      },
    });

    if (error) {
      console.error('Error in signup', error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        {
          status: 400,
        }
      );
    }

    const name = userData.first_name + ' ' + userData.last_name;

    await sendCredententials(name, userData.email, password);

    return new Response(JSON.stringify({ success: true }), {
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
