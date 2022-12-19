import * as express from 'express';
import catsRouter from './cats/cats.routes';

const app: express.Express = express();
const port: number = 3000;

//* logging middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    console.log('this this longging middleware');
    next();
  }
);

// json을 읽을 수 있도록 미들웨어 추가
app.use(express.json());

app.use(catsRouter);

//* 404 middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('this is 404');
    res.status(404).send('404 not found');
  }
);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
