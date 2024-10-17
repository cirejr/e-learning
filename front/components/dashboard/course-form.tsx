'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createClient } from '@/utils/supabase/client'
import { courseSchema } from '@/lib/schemas/course'
import { Course } from '@/lib/definitions/course'

// Initialize Supabase client
const supabase = createClient()

type CourseFormData = z.infer<typeof courseSchema>

export default function CourseCreationForm({ course }: { course?: Course}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: '',
      description: '',
      url: '',
      code: '',
      start_date: '',
      end_date: '',
      teacher_id: '', // You might want to set this dynamically based on the logged-in teacher
    },
  })

  const onSubmit = async (data: CourseFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const { data: course, error } = await supabase
        .from('courses')
        .insert([
          {
            title: data.title,
            description: data.description,
            url: data.url,
            code: data.code,
            start_date: data.start_date,
            end_date: data.end_date,
            teacher_id: data.teacher_id,
          },
        ])
        .single()

      if (error) throw error

      console.log('Course created successfully:', course)
      // Reset form after successful submission
      form.reset()
    } catch (error) {
      console.error('Error creating course:', error)
      setSubmitError('An error occurred while creating the course. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Course title" {...field} />
              </FormControl>
              <FormDescription>The title of your course.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Course description" {...field} />
              </FormControl>
              <FormDescription>A brief description of your course.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormDescription>The URL for your course (optional).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Code</FormLabel>
              <FormControl>
                <Input placeholder="COURSE101" {...field} />
              </FormControl>
              <FormDescription>The unique code for your course.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="start_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>The start date of your course.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>The end date of your course.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="teacher_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teacher ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>The UUID of the teacher for this course.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitError && <div className="text-red-500">{submitError}</div>}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Course'}
        </Button>
      </form>
    </Form>
  )
}