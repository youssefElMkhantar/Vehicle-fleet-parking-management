import express, { Application, Request, Response, NextFunction } from 'express';
import registerRouter from './vehicle/routes/vehicle.register';
import parkRouter from './vehicle/routes/vehicle.park';

const app: Application = express();
app.use(express.json());

app.use('/register', registerRouter);
app.use('/park', parkRouter);
app.use('/', (req: Request, res: Response) => {
  return res.json({ message: 'hello' });
});

app.listen(5002, () => console.log('running'));
