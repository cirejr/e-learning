'use client';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function CTA() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };
  return (
    <section className='bg-teal-600 py-20 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>
          Ready to Start Your Journey?
        </h2>
        <p className='mb-8 text-xl'>
          Join our community of aspiring media professionals today.
        </p>
        <form
          onSubmit={handleSubscribe}
          className='mx-auto flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row'
        >
          <Input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white text-gray-800'
            required
          />
          <Button
            type='submit'
            className='w-full bg-white text-teal-600 hover:bg-gray-100 sm:w-auto'
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}
