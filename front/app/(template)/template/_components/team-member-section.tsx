import React from 'react';
import SectionWrapper from '@/app/(template)/template/_components/section-wrapper';
import TeacherCard from '@/app/(template)/template/_components/teacher-card';
import { tutors } from './config';

export default function TeamMembers() {
  return (
    <SectionWrapper
      title='Tutors'
      headTitle='Meet the Heroes'
      description='On Weekend UX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.'
    >
      <div className='flex items-center justify-center gap-3'>
        {tutors.map((tutor, index) => (
          <TeacherCard
            key={index}
            name={tutor.name}
            supportingText={tutor.supportingText}
            userImage={tutor.userImage}
            userRole={tutor.userRole}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
