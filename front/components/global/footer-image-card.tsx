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
      <Card isFooterBlurred isBlurred className='w-[300px] h-[350px]'>
        <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>New</p>
          <h4 className='text-black font-medium text-2xl'>
            Program Coming soon
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card example background'
          className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
          src='https://img.freepik.com/photos-gratuite/personnage-3d-emergeant-smartphone_23-2151336579.jpg?t=st=1715360000~exp=1715363600~hmac=30d51552453fd3555c2852dba8b43357a1cf6badaf2c8c5b892ec1eb577351f3&w=360'
        />
        <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
          <div>
            <p className='text-black text-tiny'>Available soon.</p>
            <p className='text-black text-tiny'>Get notified.</p>
          </div>
          <Button className='text-tiny' color='primary' radius='full' size='sm'>
            Notify Me
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
