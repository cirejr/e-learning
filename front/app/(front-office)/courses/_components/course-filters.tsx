'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { Course } from '@/lib/definitions/course';

interface CourseFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  resetFilters: () => void;
}

export default function CourseFilters({ courses }: { courses: Course[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const filteredAndSortedCourses = useMemo(() => {
    return courses
      .filter((course) => {
        const matchesSearch = course.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === 'all' ||
          course.category.toLowerCase() === selectedCategory;
        const matchesLevel =
          selectedLevel === 'all' ||
          course.level.toLowerCase() === selectedLevel;
        return matchesSearch && matchesCategory && matchesLevel;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'title':
            return a.title.localeCompare(b.title);
          case 'newest':
            return b.id - a.id;
          case 'popular':
            return b.popularity - a.popularity || 0; // Example fallback
          default:
            return 0;
        }
      });
  }, [courses, searchQuery, selectedCategory, selectedLevel, sortBy]);

  const totalPages = Math.ceil(
    filteredAndSortedCourses.length / ITEMS_PER_PAGE
  );
  const paginatedCourses = filteredAndSortedCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSortBy('title');
    setCurrentPage(1);
  };

  return (
    <div className='space-y-4'>
      {/* Search & Filters */}
      <div className='relative'>
        <input
          type='text'
          placeholder='Search courses...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='pl-8'
        />
      </div>

      {/* Category, Level, Sort */}
      <div className='flex flex-wrap gap-4'>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value='all'>All Categories</option>
          <option value='journalism'>Journalism</option>
          <option value='digital-media'>Digital Media</option>
          <option value='broadcasting'>Broadcasting</option>
          <option value='communication'>Communication</option>
        </select>

        <select
          onChange={(e) => setSelectedLevel(e.target.value)}
          value={selectedLevel}
        >
          <option value='all'>All Levels</option>
          <option value='beginner'>Beginner</option>
          <option value='intermediate'>Intermediate</option>
          <option value='advanced'>Advanced</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value='title'>Title</option>
          <option value='newest'>Newest</option>
          <option value='popular'>Most Popular</option>
        </select>

        {searchQuery ||
        selectedCategory !== 'all' ||
        selectedLevel !== 'all' ||
        sortBy !== 'title' ? (
          <button onClick={resetFilters}>Reset Filters</button>
        ) : null}
      </div>

      {/* Course Listing */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedCourses.map((course) => (
          <div key={course.id}>{course.title}</div> // Assuming title here for display
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div>
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
            Previous
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
