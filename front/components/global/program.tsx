import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '../ui/icons';
import getPrograms from '@/data-access/programs';
import Image from 'next/image';

export async function Programs() {
  const programs = await getPrograms();
  console.log(programs);
  return (
    <section className='bg-muted py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight'>
            Nos Programmes
          </h2>
          <p className='mx-auto max-w-2xl text-muted-foreground'>
            Choisissez parmi notre gamme diversifiée de programmes conçus pour
            vous préparer au succès dans divers domaines des médias et de la
            communication.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {programs.map((program: any, index: any) => (
            <Card key={index} className='overflow-hidden'>
              <div className='relative aspect-video'>
                <Image
                  fill
                  src={''}
                  alt={program.title}
                  className='absolute inset-0 h-full w-full object-cover'
                />
              </div>
              <CardContent className='p-6'>
                <h3 className='mb-2 text-xl font-semibold'>{program.title}</h3>
                <p className='mb-4 text-muted-foreground'>
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='flex w-full items-center justify-center py-10'>
        <Button
          variant='ghost'
          size={'lg'}
          className='group bg-primary-foreground text-primary hover:bg-white hover:text-primary'
          asChild
        >
          <Link href='/courses'>
            Voir Tous Les Programmes
            <Icons.chevronRight className='h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1' />
          </Link>
        </Button>
      </div>
    </section>
  );
}
