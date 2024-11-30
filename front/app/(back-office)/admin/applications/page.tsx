'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ApplicationFilters } from './_components/application-filters';
import { ApplicationTable } from './_components/application-table';
import { Pagination } from '@/components/ui/pagination';
import { Eye, Download } from 'lucide-react';
import Link from 'next/link';

// In a real app, this would come from your API/database
const applications = [
  {
    id: 'APP001',
    name: 'John Smith',
    program: 'Bachelor of Journalism',
    submittedDate: '2024-03-15',
    status: 'pending',
    email: 'john.smith@example.com',
    phone: '(123) 456-7890',
  },
  {
    id: 'APP002',
    name: 'Sarah Johnson',
    program: 'Digital Media Production',
    submittedDate: '2024-03-14',
    status: 'under_review',
    email: 'sarah.j@example.com',
    phone: '(123) 456-7891',
  },
  {
    id: 'APP003',
    name: 'Michael Chen',
    program: 'Broadcasting and Media',
    submittedDate: '2024-03-13',
    status: 'accepted',
    email: 'm.chen@example.com',
    phone: '(123) 456-7892',
  },
  {
    id: 'APP004',
    name: 'Emily Rodriguez',
    program: 'Strategic Communication',
    submittedDate: '2024-03-12',
    status: 'rejected',
    email: 'e.rodriguez@example.com',
    phone: '(123) 456-7893',
  },
];

const ITEMS_PER_PAGE = 10;

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] =
    useState<keyof (typeof applications)[0]>('submittedDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const filteredApplications = applications
    .filter((application) => {
      const matchesSearch =
        application.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        application.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        selectedStatus === 'all' || application.status === selectedStatus;
      const matchesProgram =
        selectedProgram === 'all' || application.program === selectedProgram;
      return matchesSearch && matchesStatus && matchesProgram;
    })
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      const sortOrder = sortDirection === 'asc' ? 1 : -1;
      return String(aValue).localeCompare(String(bValue)) * sortOrder;
    });

  const totalPages = Math.ceil(filteredApplications.length / ITEMS_PER_PAGE);
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (field: keyof (typeof applications)[0]) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedStatus('all');
    setSelectedProgram('all');
    setCurrentPage(1);
  };

  return (
    <div className='space-y-8 px-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Applications</h2>
        <Button variant='outline' asChild>
          <Link href='/admin/applications/export'>
            <Download className='mr-2 h-4 w-4' />
            Export Data
          </Link>
        </Button>
      </div>

      <div className='grid gap-4 md:grid-cols-4'>
        <Card className='p-4'>
          <div className='text-sm font-medium text-muted-foreground'>
            Total Applications
          </div>
          <div className='text-2xl font-bold'>{applications.length}</div>
        </Card>
        <Card className='p-4'>
          <div className='text-sm font-medium text-muted-foreground'>
            Pending Review
          </div>
          <div className='text-2xl font-bold'>
            {applications.filter((a) => a.status === 'pending').length}
          </div>
        </Card>
        <Card className='p-4'>
          <div className='text-sm font-medium text-muted-foreground'>
            Under Review
          </div>
          <div className='text-2xl font-bold'>
            {applications.filter((a) => a.status === 'under_review').length}
          </div>
        </Card>
        <Card className='p-4'>
          <div className='text-sm font-medium text-muted-foreground'>
            Processed
          </div>
          <div className='text-2xl font-bold'>
            {
              applications.filter((a) =>
                ['accepted', 'rejected'].includes(a.status)
              ).length
            }
          </div>
        </Card>
      </div>

      <ApplicationFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
        resetFilters={resetFilters}
      />

      <ApplicationTable
        applications={paginatedApplications}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={handleSort}
      />

      <div className='flex items-center justify-between'>
        <p className='text-sm text-muted-foreground'>
          Showing {paginatedApplications.length} of{' '}
          {filteredApplications.length} applications
        </p>
        <Pagination
          className='justify-end'
          //@ts-expect-error
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
