import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const requirements = [
  {
    title: 'Academic Requirements',
    items: [
      'High school diploma or equivalent',
      'Minimum GPA of 3.0',
      'SAT/ACT scores',
      'Letters of recommendation',
    ],
  },
  {
    title: 'Portfolio Requirements',
    items: [
      'Writing samples',
      'Digital media projects',
      'Published work (if any)',
      'Personal statement',
    ],
  },
  {
    title: 'Additional Requirements',
    items: [
      'English proficiency test scores (international students)',
      'Interview (selected candidates)',
      'Technical assessment',
      'Creative portfolio review',
    ],
  },
];

export function Requirements() {
  return (
    <section id='requirements' className='container py-24'>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>Admission Requirements</h2>
        <p className='mx-auto max-w-2xl text-muted-foreground'>
          Review our comprehensive admission requirements to ensure you&apos;re
          prepared for your application
        </p>
      </div>
      <div className='grid gap-8 md:grid-cols-3'>
        {requirements.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className='flex items-start gap-2'>
                    <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
