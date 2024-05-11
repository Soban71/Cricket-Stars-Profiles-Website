import { RequestHandler } from 'express';
import { signJWT, verifyJWT } from '../services/JwtService';
const secretKey = 'your-secret-key';

export const jwtMiddleware: RequestHandler = (req, res, next) => {
  // Extract token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  try {
    // Verify JWT token
    const decoded = verifyJWT(token);
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
