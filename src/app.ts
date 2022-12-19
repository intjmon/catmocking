import * as express from 'express';
import { Cat, CatType } from './app.model';

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

//* READ 모든 데이터
app.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    //throw new Error('DB connect Error');
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (e: any) {
    res.status(400).send({
      success: false,
      error: e.message,
    });
  }
});

//* READ 특정 데이터
app.get('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    console.log('params:', params);
    const cats = Cat.find((cat) => cat.id === params.id);
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (e: any) {
    res.status(400).send({
      success: false,
      error: e.message,
    });
  }
});

//* CREATE new cat
app.post('/cats', (req, res) => {
  try {
    const data = req.body;
    console.log('data:', data);
    Cat.push(data);
    console.log('Cat:', Cat);
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (e: any) {
    res.status(400).send({
      success: false,
      error: e.message,
    });
  }
});

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
