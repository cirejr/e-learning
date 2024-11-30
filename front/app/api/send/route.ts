import ContactFormEmail from '@/components/email/welcome-email';
import { EmailTemplate } from '../../../components/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'CFTS <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Formulaire de contact',
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
