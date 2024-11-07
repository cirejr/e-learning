import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Course } from '@/lib/definitions/course';
import { formatDate } from 'date-fns';
import LearnMore from '@/app/(template)/template/_components/learn-more';

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className='flex flex-col overflow-hidden'>
      <div className='relative aspect-video'>
        <img
          src={course.thumbnail_url}
          alt={course.title}
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>
      <CardHeader>
        <CardTitle className='line-clamp-2'>{course.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 space-y-4'>
        <p className='line-clamp-2 text-sm text-muted-foreground'>
          {course.description}
        </p>
        <div className='space-y-2'>
          <div className='flex items-center gap-2 text-sm'>
            <Clock className='h-4 w-4 text-muted-foreground' />
            <span>{formatDate(course.start_date, 'dd/MM/yyyy')}</span>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <Users className='h-4 w-4 text-muted-foreground' />
            <span>
              {course.profiles.first_name} {course.profiles.last_name}
            </span>
          </div>
        </div>
        <div className='pt-4'>
          <LearnMore href={`/courses/${course.code}?id=${course.id}`} />
        </div>
      </CardContent>
    </Card>
  );
}
