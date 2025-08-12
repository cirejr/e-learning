import { request, response, Router } from 'express';
import { sql } from '../database/config.js';
import { authenticateToken } from '../middlewares/auth-token.js';

const router = Router();

router.get('/api/forum/posts', async (request, response) => {
  try {
    const res = await sql` SELECT forum_posts.*,
      users.first_name AS author_first_name,
      users.last_name AS author_last_name,
      forum_topics.title AS topic_title
      FROM forum_posts INNER JOIN users ON forum_posts.author_id = users.id
      INNER JOIN forum_topics ON forum_posts.topic_id = forum_topics.id
    `;
    return response.json({ data: res });
  } catch (error) {
    console.log(error);
    return response.sendStatus(500);
  }
});

router.get('/api/forum/posts-view', async (request, response) => {
  try {
    const res = await sql`
      SELECT post_with_reply_count.*,
      users.first_name AS author_first_name, 
      users.last_name AS author_last_name,
      forum_topics.title AS topic_title
      FROM post_with_reply_count INNER JOIN users ON post_with_reply_count.author_id = users.id
      INNER JOIN forum_topics ON post_with_reply_count.topic_id = forum_topics.id
    `;
    response.json({ data: res });
  } catch (error) {
    return response.sendStatus(500);
  }
});

router.post(
  '/api/forum/posts/create',
  authenticateToken,
  async (request, response) => {
    const { title, content, topic_id, author_id } = request.body;

    try {
      await sql`
      INSERT INTO forum_posts (title, content, topic_id, author_id) VALUES(${title}, ${content}, ${topic_id}, ${author_id})
    `;

      response.status(201).json({ message: 'POST CREATED SUCCESSFULLY' });
    } catch (error) {
      console.log('err', error);
      response.sendStatus(500);
    }
  }
);

router.get('/api/forum/topics', async (request, response) => {
  try {
    const res = await sql`SELECT * FROM forum_topics`;
    response.json({ data: res });
  } catch (error) {
    response.sendStatus(500);
  }
});

router.get('/api/forum/topics/posts', async (request, response) => {
  try {
    const res = await sql`SELECT * FROM forum_topic_with_post_count`;
    response.json({ data: res });
  } catch (error) {
    return response.sendStatus(500);
  }
});

router.get(
  '/api/forum/posts/my-posts/:id',
  authenticateToken,
  async (request, response) => {
    const {
      params: { id },
    } = request;
    try {
      const res = await sql`
        SELECT pwrc.*,
        u.first_name, u.last_name,
        ft.title
        FROM post_with_reply_count pwrc INNER JOIN users u ON pwrc.author_id = u.id
        INNER JOIN forum_topics ft ON pwrc.topic_id = ft.id
        WHERE u.id = ${id}
      `;

      console.log('res', res);

      response.json({ data: res });
    } catch (error) {
      response.sendStatus(500);
    }
  }
);

router.get('/api/forum/posts/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const res_posts = await sql`SELECT forum_posts.*, 
      forum_topics.title AS topic_title,
      users.first_name AS author_first_name,
      users.last_name AS author_last_name
      FROM forum_posts INNER JOIN forum_topics ON forum_posts.topic_id = forum_topics.id 
      INNER JOIN users ON forum_posts.author_id = users.id 
      WHERE forum_posts.id = ${id} 
    `;

    const post = res_posts[0];

    const res_comments = await sql`SELECT forum_comments.*,
      users.first_name AS author_first_name,
      users.last_name AS author_last_name
      FROM forum_comments LEFT JOIN users ON forum_comments.author_id = users.id
      WHERE forum_comments.post_id = ${id} 
    `;

    post.comments = res_comments;

    response.json({ data: post });
  } catch (error) {
    console.log('err:', error);
    response.sendStatus(500);
  }
});

router.post(
  '/api/forum/posts/comments/create',
  authenticateToken,
  async (request, response) => {
    const {
      body: { content, author_id, post_id },
    } = request;

    try {
      await sql`
        INSERT INTO forum_comments (content, author_id, post_id ) VALUES (${content}, ${author_id},${post_id})
      `;

      response.status(201).json({ success: 'COMMENT CREATED' });
    } catch (error) {
      console.log('err', error);
      response.sendStatus(500);
    }
  }
);

export default router;
