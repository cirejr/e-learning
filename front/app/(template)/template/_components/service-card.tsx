import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import LearnMore from './learn-more';

type ServiceCardProps = {
  href: string;
  icon: JSX.Element;
  cardTitle: string;
  cardContent: string;
};

export default function ServiceCard({
  href,
  icon,
  cardTitle,
  cardContent,
}: ServiceCardProps) {
  return (
    <Card className='hover:bg-primary hover:text-foreground-50 hover:transition hover:ease-in hover:delay-75'>
      <CardHeader className='pb-4 flex-row items-center gap-4'>
        <div className='inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary'>
          {/* <PresentationIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" /> */}
          {icon}
        </div>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter>
        <LearnMore href={href} />
      </CardFooter>
    </Card>
  );
}
