import { appConfig } from '@/config';
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!!!');
});

app.listen(appConfig.Port, () => {
  console.log(`Example app listening on port ${appConfig.Port}`);
});
