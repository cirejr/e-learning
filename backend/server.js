import express from 'express';
import { sql } from './database/config.js';
import coursesRouter from './routes/courses.js';
import forumRouter from './routes/forums.js';
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';
import { logging } from './middlewares/logging.js';

const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(logging);
app.use(coursesRouter);
app.use(forumRouter);
app.use(usersRouter);
app.use(authRouter);

app.get('/', async (_, res) => {
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  console.log('version :', version);
  res.json({ version });
});

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
