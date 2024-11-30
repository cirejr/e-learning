import React from 'react';
import { Card, CardContent, CardHeader } from '../../../../components/ui/card';
import Image from 'next/image';
import { Chip } from '@nextui-org/react';
import { Link } from 'next-view-transitions';

export type ArticleProps = {
  imageUrl: string;
  createdAt: string;
  title: string;
  description: string;
  tags: {
    name: string;
    color: 'success' | 'danger' | 'warning' | 'default';
  }[];
  isMobile?: boolean;
  href: string;
};

export function Article({
  imageUrl,
  createdAt,
  description,
  tags,
  title,
  isMobile,
  href,
}: ArticleProps) {
  return (
    <Card className='border-none shadow-none hover:animate-pulse'>
      <Link href={href}>
        {!isMobile && (
          <CardHeader className='pt-0'>
            <Image fill src={imageUrl} alt={title} width={500} height={300} />
          </CardHeader>
        )}
        <CardContent className={`flex gap-3`}>
          {isMobile && (
            <Image fill src={imageUrl} alt={title} width={320} height={200} />
          )}
          <div className='space-y-2'>
            <p className='text-sm text-primary'>{createdAt}</p>
            <p className='font-semibold'>{title}</p>
            <p className='text-muted-foreground'>{description}</p>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <Chip key={index} variant='flat' color={tag.color}>
                  {tag.name}
                </Chip>
              ))}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
