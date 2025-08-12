import React from 'react';

import Breadcrumbs from '@/components/dashboard/breadcrumbs';
import { ContentLayout } from '@/components/dashboard/content-layout';
import { getUser } from '@/data-access/data';
import { User } from '@supabase/supabase-js';
import { getMyPosts } from '@/data-access/forum';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default async function MyPosts() {
  const user = (await getUser()) as User;
  const posts = await getMyPosts(user.id);
  return (
    <ContentLayout breadcrumb={<Breadcrumbs />} title='Mes Publications'>
      <main>
        {posts.length > 0 ? (
          posts.map((post: any, index: number) => (
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
                        By {post.first_name} {post.last_name}
                      </span>
                      <span>·</span>
                      {/* <span>{intlFormat(post.post_created_at)}</span> */}
                    </div>
                  </div>
                  <div className='text-right text-sm text-muted-foreground'>
                    <div>{post.reply_count} réponses</div>
                  </div>
                </div>
                <div className='mt-4 flex items-center gap-2'>
                  <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                    {post.forum_topics.title}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div>Aucun post</div>
        )}
      </main>
    </ContentLayout>
  );
}
