import { register } from './../controllers/vehicle.register';
import { Router } from 'express';

const router = Router();

router.post('/', register);

export default router;
