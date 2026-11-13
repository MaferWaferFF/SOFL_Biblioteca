import app from './app.js';
import {env} from 'config/env.js';
import {probarConexion} from './config/db.js';

try{
    const info =  await probarConexion();
    console.log(`MySQL conectado: ${info.bd} como ${info.usuario} en ${info.host}:${info.port}`);

}catch(err){
    console.log(`No se pudo conecta a la base de datos: ${err.message}`);
}

app.listen(env.port, ()=>{
    console.log(`Api biblioteca UNU en http://localhost:${env.port}/api`);

})