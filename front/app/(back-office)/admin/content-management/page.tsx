import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import React from 'react';

export default function ContentManagement() {
  return (
    <ContentLayout title='Content Management'>
      <Breadcrumbs />
    </ContentLayout>
  );
}
