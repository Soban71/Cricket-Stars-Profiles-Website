import express from 'express';
import { CricketerController } from '../controllers/CricketerController';
import { jwtMiddleware } from '../middleWare/JwtValidation';
const router = express.Router();
const cricketerController = new CricketerController();
router.use(jwtMiddleware);
router.get('/', cricketerController.getAllCricketers);
router.get('/:id', cricketerController.getCricketerById);
router.post("/", cricketerController.createCricketer)
router.put("/:id", cricketerController.updateCricketerById)
router.delete('/:id', cricketerController.deleteCricketerById);

export default router;
