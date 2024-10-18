'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format, isAfter, isValid } from "date-fns"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

import { createClient } from '@/utils/supabase/client'
import { courseSchema } from '@/lib/schemas/course'
import { Course } from '@/lib/definitions/course'
import { User } from '@/lib/definitions/user'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { CalendarIcon, Clock } from 'lucide-react'
import { cn, generateCourseCode } from '@/lib/utils'
import { createCourse, updateCourse } from '@/lib/actions/course'
import { toast } from 'sonner'


const supabase = createClient()


type CourseFormData = z.infer<typeof courseSchema>

export default function CourseCreationForm({ course, teachers }: { course?: Course, teachers: User[]}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  const [date, setDate] = useState<Date>()
  

  const form = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: course?.title ?? '',
      description: course?.description ?? '',
      url: course?.url ?? '',
      start_date: course?.start_date.toString() ?? '',
      end_date: course?.end_date.toString() ?? '',
      teacher_id: course?.teacher_id ?? '',
    },
  })


  const onSubmit = async (data: CourseFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    const dataToSend = {
      code: generateCourseCode(data.title),
      ...data
    }
    console.log('dataToSend', dataToSend)
    try {
      let res;
      if (course) {
        res = await updateCourse(course.id, dataToSend);
      } else {
        res = await createCourse(dataToSend);
      }
      console.log('res :', res)
      if (res.success) {
        toast.success(
          course ? 'Cours mis à jour avec succès' : 'Cours créé avec succès'
        );
      } else if (res.error) {
        //@ts-ignore
        toast.error(res.error.message as string);
      }
    } catch (error) {
      toast.error(
        course
          ? 'Une erreur est survenue lors de la mise à jour du cours'
          : "Une erreur est survenue lors de la création du cours"
      );
    }
    setIsSubmitting(false)
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
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="start_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
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
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date de début</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(new Date(field.value), "PPP p")
                        ) : (
                          <span>Pick a date and time</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate)
                        if (newDate) {
                          const currentTime = field.value
                            ? new Date(field.value)
                            : new Date()
                          newDate.setHours(currentTime.getHours())
                          newDate.setMinutes(currentTime.getMinutes())
                          field.onChange(newDate.toISOString())
                        }
                      }}
                      initialFocus
                    />
                    <div className="border-t border-border p-3">
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            value={field.value ? format(new Date(field.value), "HH:mm") : ""}
                            onChange={(e) => {
                              const timeString = e.target.value
                              const [hours, minutes] = timeString.split(':')
                              const newDate = date || new Date()
                              newDate.setHours(parseInt(hours))
                              newDate.setMinutes(parseInt(minutes))
                              if (isValid(newDate)) {
                                field.onChange(newDate.toISOString())
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date de fin</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(new Date(field.value), "PPP p")
                        ) : (
                          <span>Pick a date and time</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate)
                        if (newDate) {
                          const currentTime = field.value
                            ? new Date(field.value)
                            : new Date()
                          newDate.setHours(currentTime.getHours())
                          newDate.setMinutes(currentTime.getMinutes())
                          field.onChange(newDate.toISOString())
                        }
                      }}
                      initialFocus
                    />
                    <div className="border-t border-border p-3">
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            value={field.value ? format(new Date(field.value), "HH:mm") : ""}
                            onChange={(e) => {
                              const timeString = e.target.value
                              const [hours, minutes] = timeString.split(':')
                              const newDate = date || new Date()
                              newDate.setHours(parseInt(hours))
                              newDate.setMinutes(parseInt(minutes))
                              if (isValid(newDate)) {
                                field.onChange(newDate.toISOString())
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name='teacher_id'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enseignant</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className='capitalize'>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un enseignant" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {teachers.map( teach => (
                    <SelectItem className='capitalize' id={teach.id} value={teach.id}>{`${teach.first_name} ${teach.last_name}`}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
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