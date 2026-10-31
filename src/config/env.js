import 'dotenv/config'; //lectura de los datos de archivos
export const env = {
    port: Number(process.env.PORT?? 3000), //si no tiene ningún valor ??
    db: {
        host: process.env.DB_HOST?? 'localhost',
        port: Number(rocess.env.PORT?? 3000),
        user: process.env.DB_USER ?? 'root',
        password: process.env.DB_PASSWORD ?? '',
        database: process.env.DB_NAME ?? 'biblioteca_unu',
        connectionLimit: Number(process.env.DB_CONNECTION_LIMIT ?? 10)
    },
    root: {
        user: process.env.DB_ROOT_USER ?? 'root',
        password: process.env.DB_PASSWORD ?? '',
    }
}
