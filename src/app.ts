import * as express from 'express';

const app: express.Express = express();
const port: number = 3000;

const data = [1, 2, 3, 4];

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ data });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
