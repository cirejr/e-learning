import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

interface ContentLayoutProps {
  breadcrumb: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: ClassValue;
}

export function ContentLayout({
  breadcrumb,
  title,
  children,
  className,
}: ContentLayoutProps) {
  return (
    <div>
      <Navbar breadcrumb={breadcrumb} />
      <Card className={cn('rounded-none border-none min-h-screen', className)}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
