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
import { toast } from 'sonner';
import { Icons } from '../ui/icons';

export function DeleteModal({ deleteFn }: { deleteFn: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await deleteFn();
      //@ts-ignore
      if (res?.status == 204) {
        toast.success('Suppression réussie');
        setIsLoading(false);
      } else {
        //@ts-ignore
        toast.error(res?.error.message);
      }
    } catch (error) {
      //@ts-ignore
      toast.error(error.message);
    }

    setIsOpen(false);
    setIsLoading(false);
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant='ghost'
          className='w-full flex justify-start px-2 font-normal'
        >
          Supprimer
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Etes vous sûr de vouloir continuer ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Cette action ne peut pas être annulée. Cela supprimera vos données
            de nos serveurs.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Annuler
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            {isLoading && <Icons.loader className='animate-spin' />}
            Confirmer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
