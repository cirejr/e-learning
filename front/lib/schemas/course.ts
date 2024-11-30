import { z } from 'zod';

/* export const courseSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title must be less than 255 characters'),
  description: z.string().min(1, 'Description is required'),
  url: z.string().optional().or(z.literal('')),
  start_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid start date',
  }),
  end_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid end date',
  }),
  teacher_id: z.string().uuid('Invalid teacher ID'),
}) */

export const courseSchema = z.object({
  title: z.string({ required_error: 'Titre est requis' }).max(255),
  description: z.string({ required_error: 'Mettre une description' }).max(350),
  url: z.string().optional(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
  teacher_id: z.string().uuid(),
  program_id: z.string().optional(),
  thumbnail_url: z.string().optional(),
});
