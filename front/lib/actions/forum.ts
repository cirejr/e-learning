'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import {
  commentSchema,
  forumPostSchema,
} from '@/app/(front-office)/forum/_components/schemas';
import { getAccessToken } from '@/data-access/data';

export async function postComment(
  commentData: z.infer<typeof commentSchema>,
  authorId: string,
  postId: string
) {
  const accessToken = await getAccessToken();

  const res = await fetch(
    `${process.env.API_URL}/forum/posts/comments/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        ...commentData,
        author_id: authorId,
        post_id: postId,
      }),
    }
  );

  if (!res.ok) {
    return { error: res.statusText };
  }

  revalidatePath('/forum/posts/[slug]', 'page');
}

export async function createPost(
  postData: z.infer<typeof forumPostSchema>,
  authorId: string
) {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.API_URL}/forum/posts/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      ...postData,
      author_id: authorId,
    }),
  });

  if (!res.ok) {
    return { message: res.statusText };
  }

  revalidatePath('/forum', 'page');
}
