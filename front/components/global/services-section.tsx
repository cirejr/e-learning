import ServiceCard from './service-card';
import { Icons } from '../ui/icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Services() {
  const services = [
    {
      cardTitle: 'Interaction Design',
      cardContent: 'Lessons on design that cover the most recent developments.',
      icon: (
        <Icons.responsive className='flex-shrink-0 w-6 h-6 text-primary-foreground' />
      ),
      href: '#',
    },
    {
      cardTitle: 'UX Design Course',
      cardContent: 'Lessons on design that cover the most recent developments.',
      icon: (
        <Icons.moniter className='flex-shrink-0 w-6 h-6 text-primary-foreground' />
      ),
      href: '#',
    },
    {
      cardTitle: 'User Interface Design',
      cardContent:
        'User Interface Design courses that cover the most recent  trends',
      icon: (
        <Icons.linechart className='flex-shrink-0 w-6 h-6 text-primary-foreground' />
      ),
      href: '#',
    },
    {
      cardTitle: 'UX Design Course',
      cardContent: 'Lessons on design that cover the most recent developments.',
      icon: (
        <Icons.moniter className='flex-shrink-0 w-6 h-6 text-primary-foreground' />
      ),
      href: '#',
    },
  ];
  return (
    <>
      <div className='container'>
        <div className='flex gap-3 flex-col items-center justify-center mb-6'>
          <p className='text-sm text-primary font-semibold'>Our Services</p>
          <p className='text-3xl font-bold'>
            Fostering a playful & engaging learning environment
          </p>
        </div>
        <div className='mx-auto max-w-6xl'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className='w-full m-auto'
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                  <ServiceCard
                    key={index}
                    cardTitle={service.cardTitle}
                    cardContent={service.cardContent}
                    icon={service.icon}
                    href={service.href}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* {services.map((service, index) => (
            <ServiceCard
              key={index}
              cardTitle={service.cardTitle}
              cardContent={service.cardContent}
              icon={service.icon}
              href={service.href}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}
