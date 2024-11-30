'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen } from 'lucide-react';

// Mock data for courses
const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    category: 'Web Development',
    instructor: 'Jane Doe',
    duration: '8 weeks',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Advanced Python Programming',
    category: 'Programming',
    instructor: 'John Smith',
    duration: '10 weeks',
    level: 'Advanced',
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    category: 'Data Science',
    instructor: 'Emily Brown',
    duration: '12 weeks',
    level: 'Intermediate',
  },
  {
    id: 4,
    title: 'UX/UI Design Principles',
    category: 'Design',
    instructor: 'Michael Johnson',
    duration: '6 weeks',
    level: 'Beginner',
  },
  {
    id: 5,
    title: 'Machine Learning Basics',
    category: 'Data Science',
    instructor: 'Sarah Williams',
    duration: '8 weeks',
    level: 'Intermediate',
  },
  {
    id: 6,
    title: 'Full Stack Web Development',
    category: 'Web Development',
    instructor: 'David Lee',
    duration: '16 weeks',
    level: 'Advanced',
  },
];

// All unique categories
const categories = Array.from(
  new Set(courses.map((course) => course.category))
);

export default function Component() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || course.category === selectedCategory)
  );

  return (
    <div className='min-h-screen pt-16'>
      <main className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <div className='mb-6 flex flex-col items-center justify-between sm:flex-row'>
            <div className='mb-4 w-full sm:mb-0 sm:w-1/2'>
              <div className='relative'>
                <Input
                  type='text'
                  placeholder='Search courses...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='pl-10'
                />
                <Search
                  className='absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground'
                  size={20}
                />
              </div>
            </div>
            <div className='flex w-full justify-end sm:w-1/2'>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='rounded-md border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='All'>All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {filteredCourses.map((course) => (
              <Card key={course.id} className='flex flex-col'>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <Badge className='mb-2'>{course.category}</Badge>
                  <p className='text-sm text-muted-foreground'>
                    Duration: {course.duration}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Level: {course.level}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>
                    <BookOpen className='mr-2 h-4 w-4' /> Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
