import { User } from '@prisma/client';

declare global {
  namespace Express {
    interface Session {
      user: User;
    }
  }
}
