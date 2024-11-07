import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { History, Users, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Section Héro */}
      <section className='relative'>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className='absolute inset-0 bg-black/60' />
        </div>
        <div className='container relative py-24'>
          <div className='max-w-3xl space-y-6 text-white'>
            <h1 className='text-4xl font-bold sm:text-5xl'>Notre Histoire</h1>
            <p className='text-xl text-gray-200'>
              Façonner l&apos;avenir du journalisme et de la communication
              depuis 1970
            </p>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className='container py-24'>
        <div className='grid gap-12 md:grid-cols-2'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold'>Notre Mission</h2>
            <p className='text-lg text-muted-foreground'>
              Former et inspirer la prochaine génération de journalistes et de
              professionnels de la communication grâce à un enseignement
              innovant, une expérience pratique et une pratique éthique.
            </p>
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                  <Award className='h-5 w-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold'>Excellence en Éducation</h3>
                  <p className='text-muted-foreground'>
                    Engagés aux plus hauts standards de formation en journalisme
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                  <BookOpen className='h-5 w-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold'>Expérience Pratique</h3>
                  <p className='text-muted-foreground'>
                    Formation en conditions réelles dans des installations de
                    pointe
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative aspect-square md:aspect-auto'>
            <Image
              src='https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              alt='Étudiants travaillant'
              className='absolute inset-0 h-full w-full rounded-lg object-cover'
            />
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className='bg-muted py-24'>
        <div className='container'>
          <div className='grid gap-8 md:grid-cols-4'>
            {[
              { number: '50+', label: "Années d'Excellence" },
              { number: '10k+', label: 'Anciens Élèves à Travers le Monde' },
              { number: '100+', label: "Partenaires de l'Industrie" },
              { number: '95%', label: "Taux d'Emploi" },
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className='p-6 text-center'>
                  <p className='text-3xl font-bold'>{stat.number}</p>
                  <p className='text-sm text-muted-foreground'>{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className='container py-24'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Notre Équipe de Direction</h2>
          <p className='mx-auto max-w-2xl text-muted-foreground'>
            Découvrez les professionnels expérimentés qui guident notre
            institution
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-3'>
          {[
            {
              name: 'Dr. Sarah Johnson',
              role: 'Doyenne',
              image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Prof. Michael Chen',
              role: 'Chef du Département de Journalisme',
              image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Dr. Emily Rodriguez',
              role: 'Directrice des Médias Numériques',
              image:
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            },
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className='p-6 text-center'>
                <div className='relative mb-4 aspect-square overflow-hidden rounded-full'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className='absolute inset-0 h-full w-full object-cover'
                  />
                </div>
                <h3 className='font-semibold'>{member.name}</h3>
                <p className='text-sm text-muted-foreground'>{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section CTA */}
      <section className='container pb-24'>
        <div className='rounded-lg bg-primary px-8 py-12 text-center text-primary-foreground'>
          <h2 className='mb-4 text-3xl font-bold'>
            Rejoignez Notre Communauté
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-primary-foreground/90'>
            Faites partie de notre héritage dans l&apos;éducation en journalisme
            et en communication
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button size='lg' variant='secondary' asChild>
              <Link href='/apply'>Postulez Maintenant</Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-primary-foreground'
              asChild
            >
              <Link href='/contact'>Contactez-Nous</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
