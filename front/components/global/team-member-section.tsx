import React from 'react';
import SectionWrapper from './section-wrapper';
import { tutors } from './config';
import TeacherCard from './teacher-card';

export default function TeamMembers() {
  return (
    <SectionWrapper
      title='Tutors'
      headTitle='Meet the Heroes'
      description='On Weekend UX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.'
    >
      <div className='flex gap-3 items-center justify-center'>
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
