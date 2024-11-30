import BlogSection from '@/app/(template)/template/_components/blog-section';
import CoursesSection from '@/app/(template)/template/_components/courses-section';
import HeroSection from '@/app/(template)/template/_components/hero-section';
import Services from '@/app/(template)/template/_components/services-section';
import TeamMembers from '@/app/(template)/template/_components/team-member-section';
import Testimony from '@/app/(template)/template/_components/testimony';

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <Services />
      <CoursesSection />
      <TeamMembers />
      <Testimony />
      <BlogSection />
    </main>
  );
}
