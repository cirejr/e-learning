import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import React from 'react';

export default function CreateCourse() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Create Course'>
      <Breadcrumbs />
    </ContentLayout>
  );
}
