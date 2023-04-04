import { Router } from 'express';
import { park } from '../controllers/vehicle.park';

const router = Router();

router.post('/', park);

export default router;
