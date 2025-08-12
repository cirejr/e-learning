import { Router } from 'express';
import { sql } from '../database/config.js';

import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

import { generateAccessToken } from '../lib/utils.js';

dotenv.config();

const router = Router();

router.post('/api/auth/login', async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;

    const userToSend = {
      email: user[0].email,
      firstName: user[0].first_name,
      lastName: user[0].last_name,
      role: user[0].role,
    };

    if (!user) return response.status(400).json('INVALID CREDENTIALS');

    const result = await bcrypt.compare(password, user[0].password);
    if (!result) return response.status(400).json('INVALID CREDENTIALS');

    const accessToken = generateAccessToken(user[0]);
    const refreshToken = jwt.sign(user[0], process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '7d',
    });

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await sql` INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES( ${user[0].id}, ${refreshToken}, ${expiresAt}) `;

    return response.json({
      access_token: accessToken,
      refresh_token: refreshToken,
      user: userToSend,
    });
  } catch (error) {
    console.log('error', error);
    return response.sendStatus(500);
  }
});

router.post('/api/auth/refresh-token', async (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  const tokenRecord =
    await sql`SELECT * FROM refresh_tokens WHERE token = ${refreshToken} AND expires_at > NOW() AND revoked_at IS NULL`;
  if (!tokenRecord.rows[0])
    return res.sendStatus(403).json({ error: 'Invalid refresh token' });
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken(user.id);
    return res.status(201).json({ accessToken });
  });
});

router.delete('/api/logout', async (req, res) => {
  const token = req.body.token;
  try {
    await sql`UPDATE refresh_tokens SET revoked_at = NOW() WHERE token=${token} and AND revoked_at IS NULL`;
    res.json({ message: 'logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Logout failed' });
  }
});

export default router;
