import * as express from 'express';
import catsRouter from './cats/cats.routes';
const port: number = 3000;

class Server {
  public app: express.Application;

  constructor() {
    console.log('constructor');
    const app: express.Application = express();
    this.app = app;
  }

  private setRoutes() {
    console.log('setRoutes');
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('this this longging middleware');
      next();
    });

    // json을 읽을 수 있도록 미들웨어 추가
    this.app.use(express.json());

    this.setRoutes();

    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log('this is 404');
      res.status(404).send('404 not found');
    });
  }

  public listen() {
    console.log('listen');
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  }
}

//const app: express.Express = express();
/*
const init = () => {
  const server = new Server();
  server.listen();
};
*/
function init() {
  const server = new Server();
  server.listen();
}

init();
