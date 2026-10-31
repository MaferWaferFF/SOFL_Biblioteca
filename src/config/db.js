import mysql from 'mysql2/promise';
import {env} from './env.js';

export const pool = mysql.createPool({
    ...env.db,//replica el formato de env
    waitForConnections: true,
    queueLimit:0,
    dateStrings: true,
    namedPlaceholders: true
});

export async function ProbarConexion(){
    const conn = await pool.getConnection();
    try{
        const [filas] = await conn.query('SELECT DATABASE() as bd,'
            + 'CURRENT_USE() as usuario, VERSION() as version')
            return filas[0];//para obtener la primera respuesta
    }catch{

    }
    finally{
        conn.release();
    }
}

export async function CerrarPool(){
    await pool.end();
}

