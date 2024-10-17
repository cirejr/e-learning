
import { z } from 'zod'

export const courseSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title must be less than 255 characters'),
  description: z.string().min(1, 'Description is required'),
  url: z.string().url('Invalid URL').optional().or(z.literal('')),
  code: z.string().min(1, 'Course code is required'),
  start_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid start date',
  }),
  end_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid end date',
  }),
  teacher_id: z.string().uuid('Invalid teacher ID'),
})