import React from 'react';

import { ContentLayout } from '@/components/dashboard/content-layout';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import UsersTable from '@/components/dashboard/tables/users/data-table';
import { columns } from '@/components/dashboard/tables/users/columns';
import { getAccessToken } from '@/data-access/data';

async function getUsers() {
  const accessToken = await getAccessToken();
  const res = await fetch(`${process.env.API_URL}/users`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data.data;
}

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Utilisateurs'>
      <main>
        <UsersTable columns={columns} data={users} formType='user' />
      </main>
    </ContentLayout>
  );
}
