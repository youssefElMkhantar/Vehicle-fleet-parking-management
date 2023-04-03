import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.send('hello');
});

app.listen(5001, () => console.log('running'));
