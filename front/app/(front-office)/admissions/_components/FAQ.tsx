import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What are the application deadlines?',
    answer:
      'Regular admission applications are due by January 15. Early decision applications are due by November 1.',
  },
  {
    question: 'Is there an application fee?',
    answer:
      'Yes, there is a non-refundable application fee of $75. Fee waivers are available for eligible students.',
  },
  {
    question: 'Are international students eligible to apply?',
    answer:
      'Yes, we welcome international students. Additional requirements include English proficiency test scores and transcript evaluation.',
  },
  {
    question: 'Do you offer financial aid?',
    answer:
      'Yes, we offer various forms of financial aid including scholarships, grants, and work-study opportunities.',
  },
  {
    question: 'Can I transfer credits from another institution?',
    answer:
      'Yes, we accept transfer credits. Each case is evaluated individually based on course content and grades.',
  },
];

export function FAQ() {
  return (
    <section className='container py-24'>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>Frequently Asked Questions</h2>
        <p className='mx-auto max-w-2xl text-muted-foreground'>
          Find answers to common questions about our admissions process
        </p>
      </div>
      <div className='mx-auto max-w-3xl'>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
