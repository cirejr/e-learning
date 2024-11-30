import React from 'react';
import SectionWrapper from '@/app/(template)/template/_components/section-wrapper';
import { Article } from '@/app/(template)/template/_components/article-card';
import { articles } from './config';

export default function BlogSection() {
  return (
    <SectionWrapper headTitle='Our recent blogs'>
      <div className='container grid grid-cols-4 gap-2'>
        <div className='col-span-2 space-y-2'>
          {articles.slice(0, 2).map((article, index) => (
            <div key={index}>
              <Article {...article} isMobile />
            </div>
          ))}
        </div>
        <div className='col-span-2'>
          <Article {...articles[2]} />
        </div>
      </div>
    </SectionWrapper>
  );
}
