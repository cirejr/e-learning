import { z } from 'zod';

export const commentSchema = z.object({
  content: z.string().min(10, {
    message: 'Le commentaire doit faire au moins 10 caractères.',
  }),
});

export const forumPostSchema = z.object({
  title: z
    .string()
    .min(5, 'Le titre doit contenir au moins 5 caractères')
    .max(100, 'Le titre ne peut pas dépasser 100 caractères'),
  topic_id: z.string().min(1, 'Veuillez sélectionner un sujet'),
  content: z
    .string()
    .min(20, 'Le contenu doit contenir au moins 20 caractères')
    .max(5000, 'Le contenu ne peut pas dépasser 5000 caractères'),
});
