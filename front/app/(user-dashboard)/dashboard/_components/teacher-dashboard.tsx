import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function TeacherDashboard() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Active Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>3</div>
          <p className='text-xs text-muted-foreground'>
            2 ongoing, 1 starting next week
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>128</div>
          <Progress value={80} className='mt-2' />
          <p className='text-xs text-muted-foreground'>80% attendance rate</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Assignments to Grade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>24</div>
          <p className='text-xs text-muted-foreground'>
            12 new submissions today
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Average Course Rating
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>4.7</div>
          <Progress value={94} className='mt-2' />
          <p className='text-xs text-muted-foreground'>94% satisfaction rate</p>
        </CardContent>
      </Card>
    </div>
  );
}
