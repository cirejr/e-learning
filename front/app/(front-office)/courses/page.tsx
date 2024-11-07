import { fetchCourses } from '@/data-access/courses';
import { CourseCard } from './_components/course-card';
import CourseFilters from './_components/course-filters';
import { Pagination } from './_components/pagination';
import { Course } from '@/lib/definitions/course';
import { getCourses } from '@/data-access/data';

/* const courses = [
  {
    id: 1,
    title: 'Introduction to Journalism',
    description:
      'Learn the fundamentals of journalism, from news writing to investigative reporting.',
    duration: '12 weeks',
    level: 'beginner',
    category: 'journalism',
    instructor: 'Dr. Sarah Johnson',
    image:
      'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Digital Media Production',
    description:
      'Master the tools and techniques of digital content creation and distribution.',
    duration: '16 weeks',
    level: 'intermediate',
    category: 'digital media',
    instructor: 'Prof. Michael Chen',
    image:
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Broadcasting Fundamentals',
    description:
      'Develop expertise in television, radio, and podcast production.',
    duration: '14 weeks',
    level: 'beginner',
    category: 'broadcasting',
    instructor: 'Emily Rodriguez',
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  // Add more courses as needed
]; */

const ITEMS_PER_PAGE = 9;

export default async function CoursesPage() {
  /* const data = await fetchCourses(1); */
  const courses = (await getCourses()) as Course[];
  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative bg-primary py-20'>
        <div className='container'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl'>
              Nos Programmes
            </h1>
            <p className='mt-4 text-xl text-primary-foreground/80'>
              Découvrez nos programmes de journalisme et de média
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='container space-y-8 py-12'>
        {/* <CourseFilters courses={courses} /> */}

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {/*
        {filteredAndSortedCourses.length > 0 ? (
          <div className='flex flex-col items-center gap-4'>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            <p className='text-sm text-muted-foreground'>
              Showing {paginatedCourses.length} of{' '}
              {filteredAndSortedCourses.length} courses
            </p>
          </div>
        ) : (
          <div className='py-12 text-center'>
            <p className='text-lg text-muted-foreground'>
              No courses found. Try adjusting your filters.
            </p>
          </div>
        )} */}
      </section>
    </div>
  );
}
