import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'veuillez entrez une adresse mail' })
    .email(),
  password: z
    .string({
      required_error: 'mot de passe requis',
    })
    .min(6, { message: 'mot de passe doit au contenir au moins 6 caractères' }),
});
