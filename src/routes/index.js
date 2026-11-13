import {Router} from 'express';
import autoresRouter from './autores.routes.js';

const router = Router();
router.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Biblioteca UNU',
        endpoints: {
            autores: '/api/autores',
            autor: '/api/autores/:id'
        }
    });
});
router.use('/autores', autoresRouter);

export default router;
