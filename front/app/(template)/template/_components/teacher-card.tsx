'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import { Link } from 'next-view-transitions';
import { Icons } from '../../../../components/ui/icons';

type TeacherCardProps = {
  userImage: string;
  name: string;
  userRole: string;
  supportingText: string;
};

export default function TeacherCard({
  userImage,
  userRole,
  name,
  supportingText,
}: TeacherCardProps) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className='max-w-[340px] h-[200px]'>
      <CardHeader className='justify-between'>
        <div className='flex gap-5'>
          <Avatar isBordered radius='full' size='md' src={userImage} />
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              {name}
            </h4>
            <h5 className='text-small tracking-tight text-default-400'>
              @{userRole}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? 'bg-transparent text-foreground border-default-200'
              : ''
          }
          color='primary'
          radius='full'
          size='sm'
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardBody className='px-3 py-0 text-small text-default-400'>
        <p>{supportingText}</p>
      </CardBody>
      <CardFooter className='gap-3'>
        <div className='flex gap-1'>
          <Button isIconOnly color='danger' size='sm'>
            <Link href='#'>
              <Icons.ig />
            </Link>
          </Button>
        </div>
        <div className='flex gap-1'>
          <Button isIconOnly variant='faded' size='sm'>
            <Link href='#'>
              <Icons.in />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
