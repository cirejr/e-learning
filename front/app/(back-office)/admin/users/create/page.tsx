import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import React from 'react';

export default function CreateUser() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Create User'>
      <Breadcrumbs />
    </ContentLayout>
  );
}
