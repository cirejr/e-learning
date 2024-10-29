'use server';
import { createClient } from '@/utils/supabase/server';

export async function getForumPosts() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('forum_posts')
    .select('*, profiles(first_name, last_name), forum_topics(title)');

  if (error) {
    throw error;
  }

  return data;
}

export async function getPostsWithRepliesCount() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('post_with_reply_count')
    .select('*, profiles(first_name, last_name), forum_topics(title)');

  if (error) {
    throw error;
  }

  return data;
}

export async function getForumTopics() {
  const supabase = createClient();

  const { data, error } = await supabase.from('forum_topics').select('*');

  if (error) {
    throw error;
  }

  return data;
}

export async function getTopicsWithPostsCount() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('forum_topic_with_post_count')
    .select('*');

  if (error) {
    throw error;
  }

  return data;
}

export async function getPostById(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('forum_posts')
    .select(
      `
      *,
      profiles (first_name, last_name), 
      forum_topics (title), 
      forum_comments (id, content, created_at, author_id, profiles (first_name, last_name))
    `
    )
    .eq('id', id);

  if (error) {
    throw error;
  }

  return data.length > 0 ? data[0] : null;
}
