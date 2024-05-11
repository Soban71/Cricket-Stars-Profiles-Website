import { Rating, User } from '@prisma/client';
import { Session } from 'express-session';

export type MySession = Session & {
  user: User;
};
