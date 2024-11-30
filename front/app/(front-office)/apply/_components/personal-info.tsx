'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface PersonalInfoProps {
  data: any;
  updateData: (data: any) => void;
}

export function PersonalInfo({ data, updateData }: PersonalInfoProps) {
  const handleChange = (field: string, value: string) => {
    updateData({ [field]: value });
  };

  return (
    <div className='space-y-6'>
      <div className='grid gap-6 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            id='firstName'
            value={data.firstName || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
            required
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
            id='lastName'
            value={data.lastName || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
            required
          />
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          value={data.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='phone'>Phone Number</Label>
        <Input
          id='phone'
          type='tel'
          value={data.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          required
        />
      </div>

      <div className='grid gap-6 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='dateOfBirth'>Date of Birth</Label>
          <Input
            id='dateOfBirth'
            type='date'
            value={data.dateOfBirth || ''}
            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
            required
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='nationality'>Nationality</Label>
          <Input
            id='nationality'
            value={data.nationality || ''}
            onChange={(e) => handleChange('nationality', e.target.value)}
            required
          />
        </div>
      </div>

      <div className='space-y-2'>
        <Label>Gender</Label>
        <Select
          value={data.gender || ''}
          onValueChange={(value) => handleChange('gender', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select gender' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='male'>Male</SelectItem>
            <SelectItem value='female'>Female</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='address'>Address</Label>
        <Input
          id='address'
          value={data.address || ''}
          onChange={(e) => handleChange('address', e.target.value)}
          required
        />
      </div>

      <div className='grid gap-6 sm:grid-cols-3'>
        <div className='space-y-2'>
          <Label htmlFor='city'>City</Label>
          <Input
            id='city'
            value={data.city || ''}
            onChange={(e) => handleChange('city', e.target.value)}
            required
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='state'>State/Province</Label>
          <Input
            id='state'
            value={data.state || ''}
            onChange={(e) => handleChange('state', e.target.value)}
            required
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='zipCode'>ZIP/Postal Code</Label>
          <Input
            id='zipCode'
            value={data.zipCode || ''}
            onChange={(e) => handleChange('zipCode', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}
