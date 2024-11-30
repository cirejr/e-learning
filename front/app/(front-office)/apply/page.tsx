'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PersonalInfo } from './_components/personal-info';
import { AcademicInfo } from './_components/academic-info';
import { ProgramSelection } from './_components/program-selection';
import { Documents } from './_components/documents';
import { Review } from './_components/review';
import { toast } from 'sonner';

const steps = [
  { id: 1, name: 'Personal Information' },
  { id: 2, name: 'Academic Background' },
  { id: 3, name: 'Program Selection' },
  { id: 4, name: 'Documents' },
  { id: 5, name: 'Review & Submit' },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    academicInfo: {},
    programSelection: {},
    documents: {},
  });

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
    try {
      // Here you would typically make an API call to submit the application
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Application submitted successfully!');
      // Redirect to confirmation page or dashboard
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    }
  };

  const updateFormData = (section: keyof typeof formData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative bg-primary py-20'>
        <div className='container'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl'>
              Apply Now
            </h1>
            <p className='mt-4 text-xl text-primary-foreground/80'>
              Begin your journey in journalism and communication
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className='container py-12'>
        <div className='mx-auto max-w-3xl space-y-8'>
          {/* Progress */}
          <div className='space-y-4'>
            <div className='flex justify-between text-sm'>
              <span>
                Step {currentStep} of {steps.length}
              </span>
              <span>{Math.round(progress)}% completed</span>
            </div>
            <Progress value={progress} className='h-2' />
          </div>

          {/* Step Title */}
          <div className='text-center'>
            <h2 className='text-2xl font-bold'>
              {steps[currentStep - 1].name}
            </h2>
          </div>

          {/* Form Steps */}
          <Card className='p-6'>
            {currentStep === 1 && (
              <PersonalInfo
                data={formData.personalInfo}
                updateData={(data) => updateFormData('personalInfo', data)}
              />
            )}
            {currentStep === 2 && (
              <AcademicInfo
                data={formData.academicInfo}
                updateData={(data) => updateFormData('academicInfo', data)}
              />
            )}
            {currentStep === 3 && (
              <ProgramSelection
                data={formData.programSelection}
                updateData={(data) => updateFormData('programSelection', data)}
              />
            )}
            {currentStep === 4 && (
              <Documents
                data={formData.documents}
                updateData={(data) => updateFormData('documents', data)}
              />
            )}
            {currentStep === 5 && <Review formData={formData} />}

            {/* Navigation Buttons */}
            <div className='mt-8 flex justify-between'>
              <Button
                variant='outline'
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              {currentStep === steps.length ? (
                <Button onClick={handleSubmit}>Submit Application</Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
