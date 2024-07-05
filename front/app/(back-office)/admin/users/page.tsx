import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import React from 'react';

export default function Users() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Users'>
      <Breadcrumbs />
    </ContentLayout>
  );
}
