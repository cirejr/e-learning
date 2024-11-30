'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import {
  commentSchema,
  forumPostSchema,
} from '@/app/(front-office)/forum/_components/schemas';

export async function postComment(
  commentData: z.infer<typeof commentSchema>,
  authorId: string,
  postId: string
) {
  console.log('authorId', authorId);
  console.log('postId', postId);
  const supabase = createClient();
  const { error } = await supabase.from('forum_comments').insert({
    content: commentData.content,
    author_id: authorId,
    post_id: postId,
  });
  if (error) {
    console.log('error in post comment', error);
    throw error;
  }

  revalidatePath('/forum/posts/[slug]', 'page');
}

export async function createPost(
  postData: z.infer<typeof forumPostSchema>,
  authorId: string
) {
  const supabase = createClient();

  const { error } = await supabase.from('forum_posts').insert({
    title: postData.title,
    content: postData.content,
    topic_id: postData.topic_id,
    author_id: authorId,
  });

  if (error) {
    console.log('error in create post', error);
    throw error;
  }

  revalidatePath('/forum', 'page');
}
