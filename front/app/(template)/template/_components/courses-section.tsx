import React from 'react';
import SectionWrapper from '@/app/(template)/template/_components/section-wrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CourseCard from '@/app/(template)/template/_components/course-card';
import { courses } from './config';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Link } from 'next-view-transitions';

export default function CoursesSection() {
  return (
    <SectionWrapper
      title='Explore Programs'
      headTitle='Our Most Popular Class'
      description="Let's join our famous class, the knowledge provided will definitely be useful for you."
    >
      <div className='mx-auto mt-6 max-w-6xl'>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className='m-auto w-full'
        >
          <CarouselContent className=''>
            {courses.map((course, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                <CourseCard
                  title={course.title}
                  description={course.description}
                  hasEnrolled={course.hasEnrolled}
                  price={course.price}
                  tag={course.tag}
                  userName={course.userName}
                  userImage={course.userImage}
                  imageUrl={course.imageUrl}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='flex w-full items-center justify-center py-10'>
        <Button
          variant='ghost'
          size={'lg'}
          className='group bg-primary-foreground text-primary hover:text-primary'
          asChild
        >
          <Link href='/courses'>
            Explore All Programs
            <Icons.chevronRight className='h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1' />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
