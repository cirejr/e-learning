import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import { UserProfileForm } from '@/components/dashboard/forms/user-profile-form';
import { Separator } from '@/components/ui/separator';
import { User } from '@supabase/supabase-js';
import React from 'react';

export default function AccountPage() {
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title=''>
      {(user: User) => (
        <main className='max-w-3xl'>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-medium'>Profile</h3>
              <p className='text-sm text-muted-foreground'>
                This is how others will see you on the site.
              </p>
            </div>
            <Separator />
            <UserProfileForm user={user} />
          </div>
        </main>
      )}
    </ContentLayout>
  );
}
