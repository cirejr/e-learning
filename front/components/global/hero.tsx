import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className='relative w-full'>
      <div className="absolute inset-0 bg-[url('/images/hero-img.jpg')] bg-cover bg-center">
        <div className='absolute inset-0 bg-black/60' />
      </div>
      <div className='relative mx-auto max-w-7xl px-4 py-32 sm:px-6 md:py-48 lg:px-8'>
        <div className='max-w-3xl space-y-8'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>
            Façonnez l&apos;avenir des médias
          </h1>
          <p className='max-w-2xl text-xl text-gray-200'>
            Rejoignez notre prestigieux programme de journalisme et de
            communication pour développer les compétences nécessaires à la
            réussite dans le paysage médiatique dynamique d&apos;aujourd'hui.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button size='lg' asChild>
              <Link href='/apply'>Postulez maintenant</Link>
            </Button>
            <Button size='lg' variant='outline' className='' asChild>
              <Link href='/courses'>Explorer les programmes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
