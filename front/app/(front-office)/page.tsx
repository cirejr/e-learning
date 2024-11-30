import CTA from '@/components/global/cta';
import { Features } from '@/components/global/features';
import { Hero } from '@/components/global/hero';
import Overview from '@/components/global/overview';
import { Programs } from '@/components/global/program';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Overview />
      <Features />
      <Programs />
      <CTA />
    </main>
  );
}
