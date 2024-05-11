import React from 'react';
import SectionWrapper from './section-wrapper';
import { articles } from './config';
import { Article } from './article-card';

export default function BlogSection() {
  return (
    <SectionWrapper headTitle='Our recent blogs'>
      <div className='grid grid-cols-4 gap-2 container'>
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
