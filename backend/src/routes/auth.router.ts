import express from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/user/me', userController.getCurrentUser);

export default router;
