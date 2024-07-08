'use client';

import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { UserForm } from './admin/user-form';
import { Icons } from '../ui/icons';
import { User } from '@/lib/definitions/user';

export default function ModalForm({
  user,
  buttonText = 'Ajouter utilisateur',
  modalTitle = 'Ajouter un nouvel utilisateur',
}: {
  user?: User;
  buttonText?: string;
  modalTitle?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button>
          <Icons.plus className='mr-2' />
          {buttonText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className='flex justify-between items-center'>
            <AlertDialogTitle>{modalTitle}</AlertDialogTitle>
            <Button
              variant='ghost'
              className=' hover:bg-red-200 hover:text-red-500'
              onClick={() => setIsOpen(false)}
            >
              x
            </Button>
          </div>
          <UserForm user={user} setIsOpen={setIsOpen} />
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
