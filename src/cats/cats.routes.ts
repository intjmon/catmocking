import { Router } from 'express';
import { NextFunction } from 'express';

import {
  readAllCat,
  readCat,
  createCat,
  updateCat,
  updatePartialCat,
  deleteCat,
} from './cats.service';

const router = Router();

console.log('router');
router.get('/cats', readAllCat);
router.get('/cats/:id', readCat);
router.post('/cats', createCat);
router.put('/cats/:id', updateCat);
router.patch('/cats/:id', updatePartialCat);
router.delete('/cats/:id', deleteCat);

export default router;
