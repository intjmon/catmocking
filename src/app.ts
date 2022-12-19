import * as express from 'express';

const app: express.Express = express();
const port: number = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ hello: 'world' });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
