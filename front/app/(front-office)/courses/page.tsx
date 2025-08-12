import { fetchCourses } from '@/data-access/courses';
import { CourseCard } from './_components/course-card';
import CourseFilters from './_components/course-filters';
import { Pagination } from './_components/pagination';
import { Course } from '@/lib/definitions/course';
import { getCourses } from '@/data-access/data';

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
