import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import React from 'react';

export default async function EditUser({ params }: { params: { id: number } }) {
  return (
    <ContentLayout title='Edit User'>
      <Breadcrumbs />
    </ContentLayout>
  );
}
