import { Cat, CatType } from './app.model';
import { Router } from 'express';

const router = Router();

//* READ 모든 데이터
router.get('/cats', (req, res) => {
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
router.get('/cats/:id', (req, res) => {
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
router.post('/cats', (req, res) => {
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

export default router;
