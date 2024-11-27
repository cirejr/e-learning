'use client';

import React from 'react';
import { Course } from '@/lib/definitions/course';
import { Button } from '@/components/ui/button';
import { UserRoundPlus } from 'lucide-react';
import { Icons } from '@/components/ui/icons';
import { enrollUser } from '@/lib/actions/course';
import { toast } from 'sonner';

export default function EnrollmentButton({ courseId }: { courseId: string }) {
  const [isLoading, setIsLoading] = React.useState(false);
  async function enroll() {
    setIsLoading(true);
    const res = await enrollUser(courseId as string);
    if (res.success) {
      toast.success('Vous êtes inscrit au cours');
    } else {
      toast.error("Une erreur est survenue lors de l'inscription");
    }

    setIsLoading(false);
  }
  return (
    <Button className='w-full' size='lg' onClick={enroll}>
      {isLoading ? (
        <Icons.loader className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <>
          <UserRoundPlus className='mr-2 h-4 w-4' /> S&apos;inscrire au cours
        </>
      )}
    </Button>
  );
}
