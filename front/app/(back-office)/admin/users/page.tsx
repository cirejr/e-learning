import React from 'react';

import { ContentLayout } from '@/components/dashboard/content-layout';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import UsersTable from '@/components/dashboard/tables/users/data-table';
import { columns } from '@/components/dashboard/tables/users/columns';
import { createClient } from '@/utils/supabase/server';
import { User } from '@/lib/definitions/user';

async function getUsers() {
  'use server';
  const supabase = createClient();
  try {
    const response = await supabase.from('profiles').select('*');
    return response.data;
  } catch (error) {
    return error;
  }
}

export default async function UsersPage() {
  const users = (await getUsers()) as unknown as User[];
  console.log("users:", users)
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Utilisateurs'>
      <main>
        <UsersTable columns={columns} data={users} formType='user' />
      </main>
    </ContentLayout>
  );
}
