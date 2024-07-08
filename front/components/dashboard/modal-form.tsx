'use client';

import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { UserForm } from './admin/user-form';

export default function ModalForm({ user }: { user?: any }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button>Ajouter utilisateur</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className='flex justify-between items-center'>
            <AlertDialogTitle>Ajouter un nouvel utilisateur</AlertDialogTitle>
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
