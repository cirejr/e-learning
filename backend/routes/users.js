import { Router } from 'express';
import * as bcrypt from 'bcrypt';
import { sql } from '../database/config.js';
import { authenticateToken } from '../middlewares/auth-token.js';

const router = Router();

router.get('/api/users', authenticateToken, async (req, res) => {
  try {
    const users = await sql`SELECT * FROM users`;
    res.json({ data: users });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post('/api/users/create', authenticateToken, async (req, res) => {
  const { email, password, first_name, last_name, role } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await sql`
      INSERT INTO users (email, password, first_name, last_name, role) 
      VALUES (${email}, ${hashPassword}, ${first_name}, ${last_name}, ${role})
      RETURNING id, email, first_name, last_name, role
      `;
    res.status(201).json({ message: 'USER CREATED' });
  } catch (error) {
    console.log('error', error);
    return res.status(500);
  }
});

router.get('/api/users/teachers', authenticateToken, async (req, res) => {
  try {
    const response = await sql`
      SELECT id, first_name, last_name, role FROM users WHERE role = 'teacher'
    `;
    res.json({ data: response });
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/api/users/current', authenticateToken, async (req, res) => {
  const { user: jwtUser } = req;
  const user =
    await sql`SELECT id, email, first_name, last_name, role FROM users WHERE id = ${jwtUser.id}`;
  return res.json({ user: user[0] });
});

export default router;
