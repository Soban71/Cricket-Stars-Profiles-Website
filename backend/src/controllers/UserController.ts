import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { MySession } from '@/dtos/Session';
import { signJWT } from '@/services/JwtService';

const userService = new UserService();

export class UserController {
  async login(req: Request, res: Response) {
    console.log(req.body);
    // console.log('id==>login', req.session.id);
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    console.log(user);
    if (user) {
      delete user.password;
      const token = await signJWT(user);
      res.cookie('token', token, {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: 'none', // Set to 'none' for cross-origin requests
        maxAge: 3600000 * 24, // 1 hour expiration time
      });
      // (req.session as MySession).user = user;
      res.setHeader('Authorization', token);
      res.json({ message: 'Logged in successfully', token }).send();
    } else {
      res.status(401).json({ message: 'Invalid credentials' }).send();
    }
  }

  async signup(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await userService.signup(email, password, 'client');
      if (user) {
        delete user.password;
        // (req.session as MySession).user = user;
        res.json({ message: 'Signed up successfully' });
      } else {
        res.status(400).json({ message: 'Failed to sign up' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getCurrentUser(req: Request, res: Response) {
    // const user = await (req.session as MySession)?.user;
    // console.log('id user==>', req.session.id);
    // console.log('current ', user);
    // if (user) {
    // res.json(user);
    // } else {
    res.status(401).json({ message: 'Not logged in' });
    // }
  }
}
