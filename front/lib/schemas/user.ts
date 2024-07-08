import { z } from 'zod';

export const userSchema = z.object({
  email: z
    .string({
      required_error: 'Veuillez saisir votre email.',
    })
    .email(),
  firstName: z.string({
    required_error: 'Veuillez saisir le nom.',
  }),
  lastName: z.string({
    required_error: 'Veuillez saisir le prénom.',
  }),
  role: z.enum(['admin', 'teacher', 'student'], {
    required_error: 'Veuillez choisir un rôle.',
  }),
  password: z.string({
    required_error: 'Veuillez tapez le mot de passe.',
  }),
});
