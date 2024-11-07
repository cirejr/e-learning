import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AdmissionHero() {
  return (
    <section className='relative'>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className='absolute inset-0 bg-black/60' />
      </div>
      <div className='container relative py-24'>
        <div className='max-w-3xl space-y-6 text-white'>
          <h1 className='text-4xl font-bold sm:text-5xl'>Admissions</h1>
          <p className='text-xl text-gray-200'>
            Begin your journey in journalism and communication at one of the
            world's leading institutions
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button size='lg' asChild>
              <Link href='/apply'>Apply Now</Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-white hover:text-white'
              asChild
            >
              <Link href='#requirements'>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
