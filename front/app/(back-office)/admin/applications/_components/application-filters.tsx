import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, X } from 'lucide-react';

interface ApplicationFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedProgram: string;
  setSelectedProgram: (program: string) => void;
  resetFilters: () => void;
}

export function ApplicationFilters({
  searchQuery,
  setSearchQuery,
  selectedStatus,
  setSelectedStatus,
  selectedProgram,
  setSelectedProgram,
  resetFilters,
}: ApplicationFiltersProps) {
  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'pending', label: 'Pending' },
    { value: 'under_review', label: 'Under Review' },
    { value: 'accepted', label: 'Accepted' },
    { value: 'rejected', label: 'Rejected' },
  ];

  const programs = [
    { value: 'all', label: 'All Programs' },
    { value: 'Bachelor of Journalism', label: 'Bachelor of Journalism' },
    { value: 'Digital Media Production', label: 'Digital Media Production' },
    { value: 'Broadcasting and Media', label: 'Broadcasting and Media' },
    { value: 'Strategic Communication', label: 'Strategic Communication' },
  ];

  return (
    <div className='flex flex-col gap-4 md:flex-row md:items-center'>
      <div className='relative flex-1'>
        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          placeholder='Search by name or ID...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='pl-8'
        />
      </div>

      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Status' />
        </SelectTrigger>
        <SelectContent>
          {statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedProgram} onValueChange={setSelectedProgram}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Program' />
        </SelectTrigger>
        <SelectContent>
          {programs.map((program) => (
            <SelectItem key={program.value} value={program.value}>
              {program.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {(searchQuery ||
        selectedStatus !== 'all' ||
        selectedProgram !== 'all') && (
        <Button variant='ghost' onClick={resetFilters} size='icon'>
          <X className='h-4 w-4' />
        </Button>
      )}
    </div>
  );
}
