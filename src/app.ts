import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();
const port: number = 3000;

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this this longging middleware');
  next();
});

app.get('/cats/som', (req, res, next) => {
  console.log('this is som middleware');
  next();
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get('/cats/blue', (req: express.Request, res: express.Response) => {
  res.send({ blue: Cat[0] });
});

app.get('/cats/som', (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  console.log('this is 404');
  res.status(404).send('404 not found');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
