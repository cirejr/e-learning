import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react';

export default function FooterImageCard() {
  return (
    <>
      <Card isFooterBlurred isBlurred className='h-[350px] w-[300px]'>
        <CardHeader className='absolute top-1 z-10 flex-col items-start'>
          <p className='text-tiny font-bold uppercase text-white/60'>New</p>
          <h4 className='text-2xl font-medium text-black'>
            Program Coming soon
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card example background'
          className='z-0 h-full w-full -translate-y-6 scale-125 object-cover'
          src='https://img.freepik.com/photos-gratuite/personnage-3d-emergeant-smartphone_23-2151336579.jpg?t=st=1715360000~exp=1715363600~hmac=30d51552453fd3555c2852dba8b43357a1cf6badaf2c8c5b892ec1eb577351f3&w=360'
        />
        <CardFooter className='absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30'>
          <div>
            <p className='text-tiny text-black'>Available soon.</p>
            <p className='text-tiny text-black'>Get notified.</p>
          </div>
          <Button className='text-tiny' color='primary' radius='full' size='sm'>
            Notify Me
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
