import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface ContentLayoutProps {
  breadcrumb: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({
  breadcrumb,
  title,
  children,
}: ContentLayoutProps) {
  return (
    <div>
      <Navbar breadcrumb={breadcrumb} />
      <Card className='rounded-none border-none min-h-screen'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
