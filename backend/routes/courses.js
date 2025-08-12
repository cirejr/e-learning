import { response, Router } from 'express';
import { sql } from '../database/config.js';
import { authenticateToken } from '../middlewares/auth-token.js';

const router = Router();

router.get('/api/courses', async (req, res) => {
  try {
    const courses = await sql`SELECT courses.*,
      users.first_name AS teacher_first_name,
      users.last_name AS teacher_last_name
      FROM courses INNER JOIN users ON courses.teacher_id = users.id
       `;
    return res.json({ data: courses });
  } catch (error) {
    console.log('err:', error);
    return res.status(500);
  }
});

router.post('/api/courses/create', authenticateToken, async (req, res) => {
  const { title, description, url, code, start_date, end_date, teacher_id } =
    req.body;
  try {
    const res = await sql`
      INSERT INTO courses (title, description, url, code, start_date, end_date, teacher_id) 
      VALUES(${title}, ${description},  ${url},  ${code},  ${start_date},  ${end_date},  ${teacher_id})
    `;

    console.log('res', res);
    res.status(201).json({ message: 'COURSE CREATED' });
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/api/courses/programs', async (request, response) => {
  try {
    const res = await sql`SELECT * FROM programs`;
    return response.json({ data: res });
  } catch (error) {
    return response.sendStatus(500);
  }
});

router.get(
  '/api/courses/enrolled/students/:id',
  authenticateToken,
  async (request, response) => {
    const {
      params: { id },
    } = request;

    try {
      const res = await sql`
        SELECT enrollments.status,
        users.first_name, users.last_name,
        courses.title, courses.description, courses.code, courses.start_date
        FROM enrollments LEFT JOIN users ON enrollments.student_id = users.id
        LEFT JOIN courses ON enrollments.course_id = courses.id
        WHERE enrollments.student_id = ${id} 
      `;
      return response.json({ data: res });
    } catch (error) {
      console.log('err', error);
      return response.sendStatus(500);
    }
  }
);

router.get('/api/courses/modules', async (request, response) => {
  try {
    const res = await sql` SELECT * FROM modules`;
    return response.json({ data: res });
  } catch (error) {
    console.log('err: ', error);
    return response.sendStatus(500);
  }
});

router.get(
  '/api/courses/teachers/:id',
  authenticateToken,
  async (request, response) => {
    const {
      params: { id },
    } = request;
    try {
      const res = await sql`
      SELECT * FROM courses WHERE courses.teacher_id = ${id}
    `;
      response.json({ data: res });
    } catch (error) {
      response.sendStatus(500);
    }
  }
);

router.get('/api/courses/:id', async (request, response) => {
  const {
    params: { id },
  } = request;
  try {
    const resCourse = await sql`
        SELECT 
        courses.*,
        users.first_name AS teacher_first_name,
        users.last_name AS teacher_last_name,
        COALESCE(
          json_agg(
            json_build_object(
              'id', modules.id,
              'title', modules.title,  
              'content', modules.content,
              'order_number', modules.order_number
            )
          ) FILTER (WHERE modules.id IS NOT NULL), 
          '[]'
        ) AS modules
        FROM courses
        INNER JOIN users ON courses.teacher_id = users.id
        LEFT JOIN modules ON courses.id = modules.course_id
        WHERE courses.id = ${id}
        GROUP BY courses.id, users.first_name, users.last_name;
    `;

    const course = resCourse[0];
    const resEnrolls = await sql`SELECT users.first_name AS student_first_name,
      users.last_name AS student_last_name
      FROM enrollments INNER JOIN users ON enrollments.student_id = users.id WHERE enrollments.course_id = ${id}
    `;
    course.enrollments = resEnrolls;
    if (resCourse.length === 0) return response.sendStatus(404);
    return response.json({ data: course });
  } catch (error) {
    console.log('err:', error);
    return response.status(500);
  }
});

router.delete(
  '/api/courses/:id',
  authenticateToken,
  async (request, response) => {
    const {
      params: { id },
    } = request;

    try {
      const res = await sql`
      DELETE FROM courses WHERE courses.id = ${id}
    `;
      response.json({ message: 'COURSE DELETED' });
    } catch (error) {
      response.sendStatus(500);
    }
  }
);

export default router;
