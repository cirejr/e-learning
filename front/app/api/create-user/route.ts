import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const supabase = createClient();
export async function POST(request: Request) {
  const { email, firstName, lastName, password, role } = await request.json();
  const userData = {
    email,
    firstName,
    lastName,
    password,
    role,
  };
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert({
        email: userData.email,
        first_name: userData.firstName,
        last_name: userData.lastName,
        role: userData.role,
        password: userData.password,
      })
      .select()
      .single();

    if (error) throw error;

    return Response.json(data);
  } catch (error) {
    return { error: error };
  } finally {
    revalidatePath('/admin/users', 'page');
  }
}
