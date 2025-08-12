'use server';
import { createClient } from '@/utils/supabase/server';
import { getAccessToken } from './data';

export async function getForumPosts() {
  const res = await fetch(`${process.env.API_URL}/forum/posts`);
  if (!res.ok) {
    throw new Error('Failed to fetch forum posts');
  }
  const data = await res.json();
  return data.data;
}

export async function getPostsWithRepliesCount() {
  const res = await fetch(`${process.env.API_URL}/forum/posts-view`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts with reply count');
  }
  const data = await res.json();
  return data.data;
}

export async function getForumTopics() {
  const res = await fetch(`${process.env.API_URL}/forum/topics`);
  if (!res.ok) {
    throw new Error('Failed to fetch forum topics');
  }
  const data = await res.json();
  return data.data;
}

export async function getTopicsWithPostsCount() {
  const res = await fetch(`${process.env.API_URL}/forum/topics/posts`);

  if (!res.ok) {
    throw new Error('Failed to fetch forum topics with post count');
  }
  const data = await res.json();
  return data.data;
}

export async function getPostById(id: string) {
  const res = await fetch(`${process.env.API_URL}/forum/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post by id');
  }
  const data = await res.json();
  return data.data;
}

export async function getMyPosts(id: string) {
  const accessToken = await getAccessToken();
  const res = await fetch(`${process.env.API_URL}/forum/posts/author/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    return { error: 'Failed to fetch my posts', data: [] };
  }
  const data = await res.json();
  return data.data;
}
