import express from 'express';
import routes from './routes/index.js';
import {rutaNoEncontrada, manejadorErrores} from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());
app.use((req, res, next)=>{
    res.on('finish', ()=>{
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
    })
    next();
});

app.get('/', (req, res) => res.redirect('/api'));
app.use('/api', routes);
app.use(rutaNoEncontrada);
app.use(manejadorErrores);
export default app;