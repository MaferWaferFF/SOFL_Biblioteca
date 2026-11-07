//import mysql from 'mysql2/promise';
import {Sequelize, QueryTypes} from 'sequelize';
import {env} from './env.js';

// export const pool = mysql.createPool({
//     ...env.db,//replica el formato de env
//     waitForConnections: true,
//     queueLimit:0,
//     dateStrings: true,
//     namedPlaceholders: true
// });

// export async function ProbarConexion(){
//     const conn = await pool.getConnection();
//     try{
//         const [filas] = await conn.query('SELECT DATABASE() as bd,'
//             + 'CURRENT_USE() as usuario, VERSION() as version')
//             return filas[0];//para obtener la primera respuesta
//     }catch{

//     }
//     finally{
//         conn.release();
//     }
// }

// export async function CerrarPool(){
//     await pool.end();
// }

export const sequelize = new Sequelize(
    env.db.database, //conexión para base de datos
    env.db.user,
    env.db.password,
    {
        host:env.db.host,
        port:env.db.pool,
        dialect:'mysql',
        logging: env.db.logging? (sql) => console.log(`[SQL] ${sql}`):false,
        pool:{max:env.db.connectionLimit, min:0, acquiere:30000, idle: 10000},
        define:{
            freezeTableName: true,
            timesramps: false,
        },
        dialectOptions:{decimalNumbers: true}
    }
)

export async function probarConexion(){
    await sequelize.authenticate();
    const [info] = await sequelize.query('SELECT DATABASE() AS bd, CURRENT_USER() as usuario, VERSION() as version', {type:QueryTypes.SELECT});
    return info;

}

export const cerraConexion = () => sequelize.close();
