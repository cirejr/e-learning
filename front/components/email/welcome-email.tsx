import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const ContactFormEmail = ({ name, email, message }: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>Nouveau message depuis le formulaire de contact de {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width='170'
          height='50'
          alt='Koala'
          style={logo}
        /> */}
        <Text style={paragraph}>Bonjour équipe CFTS,</Text>
        <Text style={paragraph}>
          Vous avez reçu un nouveau message depuis le formulaire de contact de
          votre site web. Voici les détails :
        </Text>
        <Text style={paragraph}>
          <strong>Nom :</strong> {name}
        </Text>
        <Text style={paragraph}>
          <strong>Email :</strong> {email}
        </Text>
        <Text style={paragraph}>
          <strong>Message :</strong> {message}
        </Text>
        <Text style={paragraph}>
          Merci de répondre à {name} à l&apos;adresse {email} dès que possible.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
