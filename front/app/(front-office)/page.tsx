import CoursesSection from '@/components/global/courses-section';
import HeroSection from '@/components/global/hero-section';
import Services from '@/components/global/services-section';
import TeamMembers from '@/components/global/team-member-section';
import Testimony from '@/components/global/testimony';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <Services />
      <CoursesSection />
      <TeamMembers />
      <Testimony />
    </main>
  );
}
