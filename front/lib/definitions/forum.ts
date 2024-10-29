export interface Profile {
  last_name: string;
  first_name: string;
}

export interface ForumTopic {
  title: string;
}

export interface ForumComment {
  id: string;
  content: string;
  author_id: string;
  created_at: string;
  profiles: Profile;
}

export interface Post {
  id: string;
  topic_id: string;
  author_id: string;
  content: string;
  created_at: string;
  title: string;
  profiles: Profile;
  forum_topics: ForumTopic;
  forum_comments: ForumComment[];
}
