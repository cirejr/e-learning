import { ContentLayout } from '@/components/dashboard/content-layout';
import MainContent from '@/components/dashboard/admin/main-content';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';

export default function Dashboard() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Dashboard'>
      <MainContent />
    </ContentLayout>
  );
}
