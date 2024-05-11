import bcrypt from 'bcrypt';
import { prisma } from '../config/initialization';

export class CricketerService {
  async getAllCricketers() {
    const cricketer = await prisma.cricketerInfo.findMany({
      include: {
        Rating: {
          select: { rating: true, review: true },
        },
      },
    });

    return cricketer;
  }

  async getCricketerById(id: number) {
    const cricketer = await prisma.cricketerInfo.findUnique({
      where: { id: id },
      include: {
        Rating: {
          select: {
            rating: true,
            review: true,
            user: {
              select: {
                email: true,
              },
            },
          },
        },
      },
    });
    return cricketer;
  }
  async updateCricketerById(id: number, data) {
    return await prisma.cricketerInfo.update({
      data: {
        matches: parseInt(data?.matches || '0', 10),
        country: data?.country || '',
        playerName: data?.playerName || '',
        role: data?.role,
        runs: parseInt(data?.runs || '0', 10),
        wickets: parseInt(data?.wickets || '0', 10),
      },
      where: { id: id },
    });
  }
  async deleteCricketerById(id: number) {
    await prisma.cricketerInfo.delete({ where: { id: id } });

    const cricketer = await prisma.cricketerInfo.findMany({
      include: {
        Rating: {
          select: { rating: true, review: true },
        },
      },
    });

    return cricketer;
  }
  async createCricketer(data) {
    return await prisma.cricketerInfo.create({
      data: {
        matches: parseInt(data?.matches || '0', 10),
        country: data?.country || '',
        playerName: data?.playerName || '',
        role: data?.role,
        runs: parseInt(data?.runs || '0', 10),
        wickets: parseInt(data?.wickets || '0', 10),
      },
    });
  }
}
