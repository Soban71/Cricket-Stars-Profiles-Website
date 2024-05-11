import jwt from 'jsonwebtoken';

export function signJWT(payload) {
  return jwt.sign(payload, 'test', { expiresIn: '1h' });
}

export function verifyJWT(token) {
  try {
    return jwt.verify(token, 'test');
  } catch (error) {
    return null; // Invalid token
  }
}
