import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import React from 'react';

export default function Courses() {
  return (
    <ContentLayout title='Courses'>
      <Breadcrumbs />
    </ContentLayout>
  );
}
