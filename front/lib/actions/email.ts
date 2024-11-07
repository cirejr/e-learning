'use server';

import CredentielsEmail from '@/components/email/credentials-email';
import { Resend } from 'resend';

export async function sendCredententials(
  name: string,
  email: string,
  password: string
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'CFTS <onboarding@resend.dev>',
    to: [email],
    subject: 'Vos identifiants',
    react: CredentielsEmail({ name, email, password }),
  });

  if (error) {
    throw error;
  }

  return data;
}
