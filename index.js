import {ProbarConexion,CerrarPool} from './src/config/db.js';
try{
    const info = await ProbarConexion();
    console.log('Conexion MYSQL exitosa');
    console.table(info);
}catch(err){
    console.error('No se pudo conectar');
    console.error(`Código: ${err.code ?? '-'}`);
    console.error(`Mensaje: ${err.message}`);
    process.exitCode = 1;
}

finally{
    CerrarPool();
}