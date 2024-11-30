'use client';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface ProgramSelectionProps {
  data: any;
  updateData: (data: any) => void;
}

export function ProgramSelection({ data, updateData }: ProgramSelectionProps) {
  const handleChange = (field: string, value: string) => {
    updateData({ [field]: value });
  };

  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <Label>Program of Interest</Label>
        <Select
          value={data.program || ''}
          onValueChange={(value) => handleChange('program', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select a program' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='journalism'>Bachelor of Journalism</SelectItem>
            <SelectItem value='digital-media'>
              Digital Media Production
            </SelectItem>
            <SelectItem value='broadcasting'>Broadcasting and Media</SelectItem>
            <SelectItem value='communication'>
              Strategic Communication
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2'>
        <Label>Intended Start Term</Label>
        <Select
          value={data.startTerm || ''}
          onValueChange={(value) => handleChange('startTerm', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select start term' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='fall-2024'>Fall 2024</SelectItem>
            <SelectItem value='spring-2025'>Spring 2025</SelectItem>
            <SelectItem value='fall-2025'>Fall 2025</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2'>
        <Label>Enrollment Status</Label>
        <RadioGroup
          value={data.enrollmentStatus || ''}
          onValueChange={(value) => handleChange('enrollmentStatus', value)}
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='full-time' id='full-time' />
            <Label htmlFor='full-time'>Full-time</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='part-time' id='part-time' />
            <Label htmlFor='part-time'>Part-time</Label>
          </div>
        </RadioGroup>
      </div>

      <div className='space-y-2'>
        <Label>Application Type</Label>
        <RadioGroup
          value={data.applicationType || ''}
          onValueChange={(value) => handleChange('applicationType', value)}
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='early-decision' id='early-decision' />
            <Label htmlFor='early-decision'>Early Decision</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='regular-decision' id='regular-decision' />
            <Label htmlFor='regular-decision'>Regular Decision</Label>
          </div>
        </RadioGroup>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='statement'>Personal Statement</Label>
        <Textarea
          id='statement'
          className='min-h-[200px]'
          value={data.statement || ''}
          onChange={(e) => handleChange('statement', e.target.value)}
          placeholder='Tell us about your interest in journalism and communication, your career goals, and why you chose our program'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='experience'>Relevant Experience</Label>
        <Textarea
          id='experience'
          className='min-h-[150px]'
          value={data.experience || ''}
          onChange={(e) => handleChange('experience', e.target.value)}
          placeholder='Describe any relevant experience in journalism, media, or communication (school newspaper, blog, podcast, etc.)'
        />
      </div>
    </div>
  );
}
