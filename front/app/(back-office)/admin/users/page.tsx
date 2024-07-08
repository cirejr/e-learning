import React from 'react';

import { ContentLayout } from '@/components/dashboard/content-layout';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import ModalForm from '@/components/dashboard/modal-form';

export default function Users() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Users'>
      <Breadcrumbs />
      <main>
        <h1>Liste des utilisateurs</h1>
        <div>
          <ModalForm />
        </div>
      </main>
    </ContentLayout>
  );
}
