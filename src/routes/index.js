import {Router} from 'express';
import autoresRouter from './autores.routes.js';

const router = Router();
router.use('/autores', autoresRouter);

export default router;
