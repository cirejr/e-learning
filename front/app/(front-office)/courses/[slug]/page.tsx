import React from 'react';
import {
  Calendar,
  Clock,
  Users,
  Video,
  Book,
  Award,
  UserRoundPlus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getCourseById } from '@/data-access/courses';
import { formatDate } from 'date-fns';
import { Course } from '@/lib/definitions/course';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import EnrollmentButton from '../_components/enrollment-button';
import { getUser } from '@/data-access/data';
import { User } from '@supabase/supabase-js';

interface Teacher {
  first_name: string;
  last_name: string;
  avatar_url: string;
}

/* const course: Course = {
  id: '1',
  title: "Journalisme d'Investigation Avancé",
  description:
    "Approfondissez vos compétences en journalisme d'investigation avec ce cours avancé. Apprenez les techniques modernes de recherche, d'analyse de données et de reportage éthique.",
  duration: '12 semaines',
  level: 'Avancé',
  students_enrolled: 45,
  thumbnail_url: '/placeholder.svg?height=400&width=600',
  course_link: 'https://zoom.us/j/example',
  teachers: [
    {
      first_name: 'Marie',
      last_name: 'Dupont',
      avatar_url: '/placeholder.svg?height=100&width=100&text=MD',
    },
    {
      first_name: 'Jean',
      last_name: 'Martin',
      avatar_url: '/placeholder.svg?height=100&width=100&text=JM',
    },
  ],
  start_date: '2024-09-01',
  syllabus: [
    "Introduction au journalisme d'investigation",
    'Techniques de recherche avancées',
    'Analyse de données et visualisation',
    "Éthique et légalité dans le journalisme d'investigation",
    "Rédaction de reportages d'investigation",
    'Sécurité numérique pour journalistes',
  ],
  progress: 65,
}; */

export default async function CourseDetails({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [course, authedUser] = (await Promise.all([
    getCourseById(searchParams.courseId as string),
    getUser(),
  ])) as [Course, User];

  let isAuthedUser = false;
  /* if (course.enrollments.includes(authedUser.id)) {
    isAuthedUser = true;
  } */

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid gap-8 md:grid-cols-3'>
        <div className='md:col-span-2'>
          <Card>
            <CardHeader>
              <CardTitle className='text-3xl font-bold'>
                {course.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='relative aspect-video h-64 w-full'>
                <Image
                  fill
                  src={course.thumbnail_url}
                  alt={course.title}
                  className='mb-6 h-64 w-full rounded-lg object-cover'
                />
              </div>
              <CardDescription className='my-6 text-lg'>
                <span className='mb-4 text-xl font-semibold text-foreground'>
                  Description du cours
                </span>
                {course.description}
              </CardDescription>
              <div className='mb-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
                <div className='flex items-center'>
                  <Calendar className='mr-2 h-5 w-5 text-teal-600' />
                  <span>
                    {formatDate(new Date(course.start_date), 'dd/MM/yyyy')}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Clock className='mr-2 h-5 w-5 text-teal-600' />
                  <span>{course.duration}</span>
                </div>
                <div className='flex items-center'>
                  <Users className='mr-2 h-5 w-5 text-teal-600' />
                  <span>{course.enrollments.length} étudiants</span>
                </div>
              </div>
              {course?.module.length > 0 && (
                <>
                  <h3 className='mb-4 text-xl font-semibold'>
                    Programme du cours
                  </h3>
                  <ul className='list-disc space-y-2 pl-5'>
                    {course?.module.map((module, index) => (
                      <li key={index}>
                        <div className='flex items-center space-x-2'>
                          <span>{module.title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
            <CardFooter>
              {isAuthedUser ? (
                <Button className='w-full' size='lg' asChild>
                  <Link href={`/${course.url}`}>
                    <Video className='mr-2 h-4 w-4' /> Rejoindre le cours en
                    ligne
                  </Link>
                </Button>
              ) : (
                <EnrollmentButton courseId={course.id as string} />
              )}
            </CardFooter>
          </Card>
        </div>
        <div className='space-y-6'>
          {/* <Card>
            <CardHeader>
              <CardTitle>Progression du cours</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={course.progress} className='w-full' />
              <p className='mt-2 text-center'>{course.progress}% complété</p>
            </CardContent>
          </Card> */}
          <Card>
            <CardHeader>
              <CardTitle>Enseignants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center space-x-4'>
                  <Avatar>
                    <AvatarImage
                      src={course.profiles.avatar_url}
                      alt={`${course.profiles.first_name} ${course.profiles.last_name}`}
                    />
                    <AvatarFallback>
                      {course.profiles.first_name[0]}
                      {course.profiles.last_name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-medium'>
                      {course.profiles.first_name} {course.profiles.last_name}
                    </p>
                    <p className='text-sm text-gray-500'>Professeur</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ressources du cours</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='flex items-center text-teal-600 hover:underline'
                  >
                    <Book className='mr-2 h-4 w-4' /> Guide du cours (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center text-teal-600 hover:underline'
                  >
                    <Video className='mr-2 h-4 w-4' /> Vidéos supplémentaires
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
