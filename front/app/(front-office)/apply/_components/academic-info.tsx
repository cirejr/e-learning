'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface AcademicInfoProps {
  data: any;
  updateData: (data: any) => void;
}

export function AcademicInfo({ data, updateData }: AcademicInfoProps) {
  const handleChange = (field: string, value: string) => {
    updateData({ [field]: value });
  };

  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <Label htmlFor='highSchool'>High School Name</Label>
        <Input
          id='highSchool'
          value={data.highSchool || ''}
          onChange={(e) => handleChange('highSchool', e.target.value)}
          required
        />
      </div>

      <div className='grid gap-6 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='graduationYear'>Graduation Year</Label>
          <Input
            id='graduationYear'
            type='number'
            min='1900'
            max='2099'
            value={data.graduationYear || ''}
            onChange={(e) => handleChange('graduationYear', e.target.value)}
            required
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='gpa'>GPA</Label>
          <Input
            id='gpa'
            type='number'
            step='0.01'
            min='0'
            max='4'
            value={data.gpa || ''}
            onChange={(e) => handleChange('gpa', e.target.value)}
            required
          />
        </div>
      </div>

      <div className='space-y-2'>
        <Label>Education Level</Label>
        <Select
          value={data.educationLevel || ''}
          onValueChange={(value) => handleChange('educationLevel', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select education level' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='high-school'>High School</SelectItem>
            <SelectItem value='some-college'>Some College</SelectItem>
            <SelectItem value='associates'>Associate&apos;s Degree</SelectItem>
            <SelectItem value='bachelors'>Bachelor&apos;s Degree</SelectItem>
            <SelectItem value='masters'>Master&apos;s Degree</SelectItem>
            <SelectItem value='doctorate'>Doctorate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2'>
        <Label>Previous College (if applicable)</Label>
        <Input
          value={data.previousCollege || ''}
          onChange={(e) => handleChange('previousCollege', e.target.value)}
        />
      </div>

      <div className='space-y-2'>
        <Label>Standardized Test Scores</Label>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <Label htmlFor='satScore'>SAT Score (if taken)</Label>
            <Input
              id='satScore'
              type='number'
              min='400'
              max='1600'
              value={data.satScore || ''}
              onChange={(e) => handleChange('satScore', e.target.value)}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='actScore'>ACT Score (if taken)</Label>
            <Input
              id='actScore'
              type='number'
              min='1'
              max='36'
              value={data.actScore || ''}
              onChange={(e) => handleChange('actScore', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='extracurricular'>Extracurricular Activities</Label>
        <Textarea
          id='extracurricular'
          className='min-h-[100px]'
          value={data.extracurricular || ''}
          onChange={(e) => handleChange('extracurricular', e.target.value)}
          placeholder='List your extracurricular activities, leadership roles, and achievements'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='awards'>Academic Awards and Honors</Label>
        <Textarea
          id='awards'
          className='min-h-[100px]'
          value={data.awards || ''}
          onChange={(e) => handleChange('awards', e.target.value)}
          placeholder='List any academic awards, honors, or recognition you have received'
        />
      </div>
    </div>
  );
}
