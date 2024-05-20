import Link from 'next/link';

import { ContentLayout } from '@/components/dashboard/content-layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import MainContent from '@/components/dashboard/admin/main-content';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';

export default function Dashboard() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Dashboard'>
      <MainContent />
    </ContentLayout>
  );
}
