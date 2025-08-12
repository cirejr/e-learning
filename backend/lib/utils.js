import jwt from 'jsonwebtoken';

export function generateAccessToken(user) {
  try {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '7d',
    });
    return accessToken;
  } catch (err) {
    console.log('error generating a token', err);
    return { error: 'Error generating token' };
  }
}
