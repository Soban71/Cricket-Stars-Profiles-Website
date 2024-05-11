import { Request, Response } from 'express';
import { CricketerService } from '../services/CricketerService';
import { MySession } from '@/dtos/Session';

const cricketerService = new CricketerService();

export class CricketerController {
  async getAllCricketers(req: Request, res: Response) {
    console.log(req.body);
    const cricketer = await cricketerService.getAllCricketers();
    console.log(cricketer);
    if (cricketer) {
      res.json(cricketer);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  async getCricketerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const cricketer = await cricketerService.getCricketerById(parseInt(id, 10));
      if (cricketer) {
        res.json(cricketer);
      } else {
        res.status(404).json({ message: 'Cricketer not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateCricketerById(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedCricketer = await cricketerService.updateCricketerById(parseInt(id, 10), data);
      res.json(updatedCricketer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteCricketerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const players = await cricketerService.deleteCricketerById(parseInt(id, 10));
      res.json(players);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async createCricketer(req: Request, res: Response) {
    const data = req.body;
    console.log('create Cricketer:', data);
    try {
      const createdCricketer = await cricketerService.createCricketer(data);
      res.json(createdCricketer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
