import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function StudentDashboard() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Courses Enrolled
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>4</div>
          <p className='text-xs text-muted-foreground'>
            2 in progress, 2 completed
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>68%</div>
          <Progress value={68} className='mt-2' />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Upcoming Deadlines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>3</div>
          <p className='text-xs text-muted-foreground'>
            Next: Project submission in 2 days
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>7</div>
          <p className='text-xs text-muted-foreground'>2 new this month</p>
        </CardContent>
      </Card>
    </div>
  );
}
