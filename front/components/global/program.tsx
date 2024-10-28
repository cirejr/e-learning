import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '../ui/icons';

const programs = [
  {
    title: 'Journalisme',
    description:
      "Maîtrisez l'art du storytelling et du reportage sur plusieurs plateformes.",
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Médias numériques',
    description: "Apprenez à créer et gérer du contenu à l'ère numérique.",
    image:
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Diffusion',
    description:
      'Développez des compétences en production télévisuelle, radiophonique et de podcasts.',
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export function Programs() {
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
          {programs.map((program, index) => (
            <Card key={index} className='overflow-hidden'>
              <div className='relative aspect-video'>
                <img
                  src={program.image}
                  alt={program.title}
                  className='absolute inset-0 h-full w-full object-cover'
                />
              </div>
              <CardContent className='p-6'>
                <h3 className='mb-2 text-xl font-semibold'>{program.title}</h3>
                <p className='mb-4 text-muted-foreground'>
                  {program.description}
                </p>
                <Button variant='outline' className='w-full' asChild>
                  <Link href={`/courses/${program.title.toLowerCase()}`}>
                    Learn More <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
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
