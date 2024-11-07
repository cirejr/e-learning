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

interface WelcomeEmailProps {
  name: string;
  email: string;
  password: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';
export const WelcomeEmail = ({ name, email, password }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Bienvenue sur la plateforme CFTS !</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Img
            src={`${baseUrl}/static/cfts-logo.png`}
            width="170"
            height="50"
            alt="CFTS"
            style={logo}
          /> */}
        <Text style={paragraph}>Bonjour {name},</Text>
        <Text style={paragraph}>
          Bienvenue sur la plateforme CFTS ! Nous sommes ravis de vous compter
          parmi nos utilisateurs. Voici vos identifiants pour vous connecter :
        </Text>
        <Text style={paragraph}>
          <strong>Email :</strong> {email}
        </Text>
        <Text style={paragraph}>
          <strong>Mot de passe :</strong> {password}
        </Text>
        <Text style={paragraph}>
          Nous vous recommandons de modifier votre mot de passe après votre
          première connexion pour garantir la sécurité de votre compte.
        </Text>
        <Text style={paragraph}>
          Si vous avez des questions ou besoin d'assistance, n'hésitez pas à
          nous contacter.
        </Text>
        <Text style={paragraph}>
          À bientôt sur CFTS !
          <br />
          L’équipe CFTS
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmailProps;

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
