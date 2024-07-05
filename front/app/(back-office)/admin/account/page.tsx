import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import React from 'react';

export default function Account() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Account'>
      <Breadcrumbs />
    </ContentLayout>
  );
}
