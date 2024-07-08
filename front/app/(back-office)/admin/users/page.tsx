import React from 'react';

import { ContentLayout } from '@/components/dashboard/content-layout';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import ModalForm from '@/components/dashboard/modal-form';
import UsersTable from '@/components/dashboard/tables/users/data-table';
import { columns } from '@/components/dashboard/tables/users/columns';

export default function Users() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Users'>
      <Breadcrumbs />
      <main>
        <h1>Liste des utilisateurs</h1>
        <UsersTable columns={columns} data={[]} />
      </main>
    </ContentLayout>
  );
}
