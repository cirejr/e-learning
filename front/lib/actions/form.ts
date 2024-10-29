'use server';

import { z } from 'zod';
import { commentSchema } from '@/app/(front-office)/forum/_components/reply-form';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function postComment(
  formData: z.infer<typeof commentSchema>,
  authorId: string,
  postId: string
) {
  const supabase = createClient();
  const { error } = await supabase.from('forum_comments').insert({
    content: formData.content,
    author_id: authorId,
    post_id: postId,
  });
  if (error) {
    throw error;
  }

  revalidatePath('/forum/posts/[slug]', 'page');
}
