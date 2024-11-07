import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';
import { getUser } from '@/data-access/data';

interface ContentLayoutProps {
  breadcrumb: React.ReactNode;
  title: string;
  children: React.ReactNode | ((user: any) => React.ReactNode);
  className?: ClassValue;
}

export async function ContentLayout({
  breadcrumb,
  title,
  children,
  className,
}: ContentLayoutProps) {
  const user = await getUser();

  return (
    <div>
      {/* @ts-ignore */}
      <Navbar breadcrumb={breadcrumb} user={user} />
      <Card className={cn('rounded-none border-none min-h-screen', className)}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {typeof children === 'function' ? children(user) : children}
        </CardContent>
      </Card>
    </div>
  );
}
