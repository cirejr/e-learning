import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { loginSchema } from './lib/form-schemas/login';
import { ZodError } from 'zod';
// Your own logic for dealing with plaintext password strings; be careful!
/* import { saltAndHashPassword } from '@/utils/password'; */

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: { password: { label: 'Password', type: 'password' } },
      authorize(c) {
        if (c.password !== 'password') return null;
        return {
          id: 'test',
          name: 'Ciré Ba',
          email: 'test@example.com',
        };
      },
      /* credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await loginSchema.parseAsync(credentials);

          // logic to salt and hash password
          const pwHash = saltAndHashPassword(password);

          // logic to verify if user exists
          user = await getUserFromDb(email, pwHash);

          if (!user) {
            throw new Error('User not found.');
          }

          // return json object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      }, */
    }),
  ],
  pages: {
    signIn: '/login',
  },
});
