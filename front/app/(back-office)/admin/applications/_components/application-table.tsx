import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ChevronUp, MoreHorizontal, Eye } from 'lucide-react';
import Link from 'next/link';

interface Application {
  id: string;
  name: string;
  program: string;
  submittedDate: string;
  status: string;
  email: string;
  phone: string;
}

interface ApplicationTableProps {
  applications: Application[];
  sortField: keyof Application;
  sortDirection: 'asc' | 'desc';
  onSort: (field: keyof Application) => void;
}

export function ApplicationTable({
  applications,
  sortField,
  sortDirection,
  onSort,
}: ApplicationTableProps) {
  const SortIcon = sortDirection === 'asc' ? ChevronUp : ChevronDown;

  const renderSortIcon = (field: keyof Application) => {
    if (sortField === field) {
      return <SortIcon className='ml-1 h-4 w-4' />;
    }
    return null;
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: { color: string; label: string } } = {
      pending: { color: 'bg-yellow-100 text-yellow-800', label: 'Pending' },
      under_review: {
        color: 'bg-blue-100 text-blue-800',
        label: 'Under Review',
      },
      accepted: { color: 'bg-green-100 text-green-800', label: 'Accepted' },
      rejected: { color: 'bg-red-100 text-red-800', label: 'Rejected' },
    };

    const { color, label } = variants[status] || variants.pending;
    return <Badge className={color}>{label}</Badge>;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='cursor-pointer' onClick={() => onSort('id')}>
            <div className='flex items-center'>
              Application ID
              {renderSortIcon('id')}
            </div>
          </TableHead>
          <TableHead className='cursor-pointer' onClick={() => onSort('name')}>
            <div className='flex items-center'>
              Applicant Name
              {renderSortIcon('name')}
            </div>
          </TableHead>
          <TableHead
            className='cursor-pointer'
            onClick={() => onSort('program')}
          >
            <div className='flex items-center'>
              Program
              {renderSortIcon('program')}
            </div>
          </TableHead>
          <TableHead
            className='cursor-pointer'
            onClick={() => onSort('submittedDate')}
          >
            <div className='flex items-center'>
              Submitted Date
              {renderSortIcon('submittedDate')}
            </div>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead className='w-[80px]'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application.id}>
            <TableCell className='font-medium'>{application.id}</TableCell>
            <TableCell>{application.name}</TableCell>
            <TableCell>{application.program}</TableCell>
            <TableCell>
              {format(new Date(application.submittedDate), 'MMM d, yyyy')}
            </TableCell>
            <TableCell>{getStatusBadge(application.status)}</TableCell>
            <TableCell>
              <div className='space-y-1'>
                <div className='text-sm'>{application.email}</div>
                <div className='text-sm text-muted-foreground'>
                  {application.phone}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <MoreHorizontal className='h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/applications/${application.id}`}>
                      <Eye className='mr-2 h-4 w-4' />
                      View Details
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      (window.location.href = `mailto:${application.email}`)
                    }
                  >
                    Contact Applicant
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
