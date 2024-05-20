import { UserForm } from '@/components/dashboard/admin/user-form';
import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function CreateUser() {
  return (
    <ContentLayout
      breadcrumb={<Breadcrumbs />}
      title="Formulaire de Création d'utilisateur"
    >
      <UserForm />
    </ContentLayout>
  );
}
