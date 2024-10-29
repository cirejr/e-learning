import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThumbsUp, Flag } from 'lucide-react';
import Link from 'next/link';
import { getPostById } from '@/data-access/forum';
import { Post } from '@/lib/definitions/forum';
import { formatDate } from 'date-fns';
import ReplyForm from '../../_components/reply-form';
import { getUser } from '@/data-access/data';

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await getPostById(params.slug)) as Post;
  const user = await getUser();
  return (
    <div className='container py-8 lg:max-w-6xl'>
      <div className='mb-6'>
        <Link
          href='/forum'
          className='text-sm text-muted-foreground hover:text-primary'
        >
          ← Forum
        </Link>
      </div>

      <div className='space-y-8'>
        {/* Main Post */}
        <Card>
          <CardContent className='p-6'>
            <div className='mb-6'>
              <h1 className='mb-4 text-2xl font-bold'>{post.title}</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-2'>
                  <Avatar className='h-6 w-6'>
                    {/* <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                    /> */}
                    <AvatarFallback>
                      {post.profiles.last_name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span>
                    {post.profiles.first_name} {post.profiles.last_name}
                  </span>
                </div>
                <span>•</span>
                <span>
                  {formatDate(new Date(post.created_at), 'dd/MM/yyyy hh:mm')}
                </span>
                <span>•</span>
                <span className='rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary'>
                  {post.forum_topics.title}
                </span>
              </div>
            </div>
            <div className='prose max-w-none'>
              <p className='whitespace-pre-line'>{post.content}</p>
            </div>
            <div className='mt-6 flex items-center gap-4'>
              <Button variant='ghost' size='sm'>
                <ThumbsUp className='mr-2 h-4 w-4' />
                Helpful
              </Button>
              <Button variant='ghost' size='sm'>
                <Flag className='mr-2 h-4 w-4' />
                Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Replies */}
        <div className='space-y-6'>
          <h2 className='text-lg font-semibold'>Réponses</h2>
          {post.forum_comments.map((reply) => (
            <Card key={reply.id}>
              <CardContent className='p-6'>
                <div className='mb-4 flex items-center gap-4'>
                  <Avatar>
                    {/* <AvatarImage
                      src={reply.author.avatar}
                      alt={reply.author.name}
                    /> */}
                    <AvatarFallback>
                      {reply.profiles.last_name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-medium'>
                      {reply.profiles.first_name} {reply.profiles.last_name}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {formatDate(reply.created_at, 'hh:mm')}
                    </div>
                  </div>
                </div>
                <p className='text-sm'>{reply.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reply Form */}
        {user && <ReplyForm userId={user?.id as string} postId={post.id} />}
      </div>
    </div>
  );
}
