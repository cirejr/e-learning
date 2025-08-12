import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getForumTopics, getTopicsWithPostsCount } from '@/data-access/forum';

export default async function Categories() {
  const categories = await getTopicsWithPostsCount();
  return (
    <div className='space-y-6 md:col-span-1'>
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {categories.map((category: any, index: number) => (
              <div
                key={index}
                className='flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-muted'
              >
                <div className='flex items-center gap-3'>
                  <div>
                    <p className='font-medium'>{category.title}</p>
                    <p className='text-sm text-muted-foreground'>
                      {category.post_count} posts
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Statistics */}
      {/*  <Card>
        <CardHeader>
          <CardTitle>Forum Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex justify-between'>
              <span className='text-muted-foreground'>Total Topics</span>
              <span className='font-medium'>465</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-muted-foreground'>Total Posts</span>
              <span className='font-medium'>3,740</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-muted-foreground'>Members</span>
              <span className='font-medium'>1,234</span>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}
