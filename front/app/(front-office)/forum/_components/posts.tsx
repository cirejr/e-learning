import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPostsWithRepliesCount } from '@/data-access/forum';
import Link from 'next/link';
import { intlFormat } from 'date-fns';

export default async function Posts() {
  const posts = await getPostsWithRepliesCount();
  return (
    <div className='space-y-4'>
      {posts.map((post: any, index: number) => (
        <Card key={index}>
          <CardContent className='p-6'>
            <div className='flex items-start justify-between'>
              <div className='space-y-1'>
                <Link
                  href={`/forum/posts/${post.post_id}`}
                  className='text-lg font-semibold transition-colors hover:text-primary'
                >
                  {post.post_title}
                </Link>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <span>
                    By {post.author_first_name} {post.author_last_name}
                  </span>
                  <span>·</span>
                  <span>{intlFormat(post.post_created_at)}</span>
                </div>
              </div>
              <div className='text-right text-sm text-muted-foreground'>
                <div>{post.reply_count} réponses</div>
              </div>
            </div>
            <div className='mt-4 flex items-center gap-2'>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                {post.title}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
