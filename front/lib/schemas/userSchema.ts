import { z } from 'zod';

const userSchema = z.object({
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
  type: z.string({
    required_error: 'Veuillez choisir un type.',
  }),
  password: z.string(),
});
