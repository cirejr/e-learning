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

export default function CoursesSection() {
  return (
    <SectionWrapper
      className='flex gap-3 flex-col items-center justify-center mb-6'
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
    </SectionWrapper>
  );
}
