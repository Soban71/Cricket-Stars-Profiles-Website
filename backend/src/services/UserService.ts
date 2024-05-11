import bcrypt from 'bcrypt';
import { prisma } from '../config/initialization';

export class UserService {
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        Rating: {
          select: {
            id: true,
            playerId: true,
            review: true,
          },
        },
      },
    });
    if (user && (await this.validatePassword(password, user.password))) {
      return user;
    } else {
      return null;
    }
  }

  async signup(email: string, password: string, role: string) {
    const hashedPassword = await this.hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, role },
    });
    delete user.password;
    return user;
  }

  async hashPassword(password: string) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async validatePassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }
}
