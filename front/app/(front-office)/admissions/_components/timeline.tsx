import { Card, CardContent } from '@/components/ui/card';
import { Calendar, CheckSquare, Clock, Send } from 'lucide-react';

const timelineSteps = [
  {
    icon: Calendar,
    title: 'Submit Application',
    date: 'October 1 - January 15',
    description:
      'Complete and submit your online application with all required documents',
  },
  {
    icon: CheckSquare,
    title: 'Application Review',
    date: 'January 15 - March 1',
    description: 'Applications are reviewed by our admissions committee',
  },
  {
    icon: Send,
    title: 'Interviews',
    date: 'March 1 - March 30',
    description: 'Selected candidates will be invited for interviews',
  },
  {
    icon: Clock,
    title: 'Final Decision',
    date: 'April 1',
    description: 'Admission decisions are released to all applicants',
  },
];

export function Timeline() {
  return (
    <section className='container bg-muted py-24'>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>Application Timeline</h2>
        <p className='mx-auto max-w-2xl text-muted-foreground'>
          Important dates and deadlines for your application process
        </p>
      </div>
      <div className='grid gap-8 md:grid-cols-4'>
        {timelineSteps.map((step, index) => (
          <Card key={index}>
            <CardContent className='pt-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                <step.icon className='h-6 w-6 text-primary' />
              </div>
              <h3 className='mb-2 font-semibold'>{step.title}</h3>
              <p className='mb-2 text-sm text-primary'>{step.date}</p>
              <p className='text-sm text-muted-foreground'>
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
