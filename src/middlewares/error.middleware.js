import { traducirErrorBD } from '../utils/errores-bd.js';

// Ruta inexistente -> 404 en JSON
export function rutaNoEncontrada(req, res) {
  res.status(404).json({ error: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
}

// Manejador central: todos los errores terminan aquí.
// Express 5 envía a este middleware los errores de funciones async.
export function manejadorErrores(err, req, res, next) {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'El cuerpo no es un JSON válido' });
  }
  const error = traducirErrorBD(err); // errores de Sequelize y MySQL
  const status = error.status ?? 500;
  if (status >= 500) console.error(err);
  res.status(status).json({
    error: status === 500 ? 'Error interno del servidor' : error.message,
    ...(error.detalles && { detalles: error.detalles })
  });
}
