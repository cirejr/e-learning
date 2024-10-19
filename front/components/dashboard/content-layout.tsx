import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';
import { SidebarTrigger } from '../ui/sidebar';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';

interface ContentLayoutProps {
  breadcrumb: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: ClassValue;
}

export async function ContentLayout({
  breadcrumb,
  title,
  children,
  className,
}: ContentLayoutProps) {
  const supabase = createClient();
  const user = (await supabase.auth.getUser()) as unknown as User;

  return (
    <div>
      <Navbar breadcrumb={breadcrumb} user={user} />
      <Card className={cn('rounded-none border-none min-h-screen', className)}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
