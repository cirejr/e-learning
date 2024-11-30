import { cn } from '@/lib/utils';
import Footer from '@/app/(template)/template/_components/footer';
import GlobalNavbar from '@/components/global/global-navbar';

export default function TemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn('min-h-screen bg-background font-sans antialiased')}>
      <GlobalNavbar />
      {children}
      <Footer />
    </main>
  );
}
