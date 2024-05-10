import React from 'react';
import SectionWrapper from './section-wrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import CourseCard from './course-card';
import { courses } from './config';
import { Button } from '../ui/button';
import { Icons } from '../ui/icons';
import { Link } from 'next-view-transitions';

export default function CoursesSection() {
  return (
    <SectionWrapper
      title='Explore Programs'
      headTitle='Our Most Popular Class'
      description="Let's join our famous class, the knowledge provided will definitely be useful for you."
    >
      <div className='mx-auto max-w-6xl mt-6'>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className='w-full m-auto'
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
      <div className='flex items-center justify-center w-full py-10'>
        <Button
          variant='ghost'
          size={'lg'}
          className='group bg-primary-foreground text-primary hover:text-primary'
          asChild
        >
          <Link href='/courses'>
            Explore All Programs
            <Icons.chevronRight className='flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1' />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
