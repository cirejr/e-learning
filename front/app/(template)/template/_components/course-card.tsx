import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  User,
} from '@nextui-org/react';
import { truncateText } from '@/lib/utils';

type CourseCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  tag: string;
  price: string;
  userImage: string;
  userName: string;
  hasEnrolled: number;
};

export default function CourseCard({
  imageUrl,
  title,
  description,
  tag,
  price,
  userImage,
  userName,
  hasEnrolled,
}: CourseCardProps) {
  return (
    <Card shadow='sm' className='h-[480px] w-[360px]' isPressable>
      <CardHeader className='justify-center'>
        <Image
          shadow='sm'
          radius='lg'
          alt={title}
          className='h-[200px] w-full object-fill'
          src={imageUrl}
        />
      </CardHeader>
      <CardBody className='space-y-2 overflow-visible'>
        <Chip variant='faded' color='primary' size='sm'>
          {tag}
        </Chip>
        <p className='text-2xl font-bold'>{truncateText(title, 20)}</p>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </CardBody>
      <CardFooter className='justify-between'>
        <User
          name={userName}
          description={`${hasEnrolled} Enrolled`}
          avatarProps={{
            src: userImage,
          }}
        />
        <p className='text-3xl font-bold text-primary'>${price}</p>
      </CardFooter>
    </Card>
  );
}
