// Traduce los errores de Sequelize y MySQL a errores HTTP comprensibles.
import {
  UniqueConstraintError,
  ForeignKeyConstraintError,
  ValidationError,
  DatabaseError,
  ConnectionError
} from 'sequelize';
import { HttpError } from './http-error.js';

const nombreRestriccion = (msg = '') => msg.match(/constraint\s+[`'"](\w+)[`'"]/i)?.[1];

export function traducirErrorBD(err) {
  // UNIQUE (isbn, nombre de categoría) -> 409
  // Va antes que ValidationError porque UniqueConstraintError hereda de él.
  if (err instanceof UniqueConstraintError) {
    const campos = Object.keys(err.fields ?? {}).join(', ');
    return new HttpError(409, `Ya existe un registro con ese valor${campos ? ` (${campos})` : ''}`);
  }

  // FOREIGN KEY: 1451 al borrar un padre con hijos, 1452 al referenciar algo inexistente
  if (err instanceof ForeignKeyConstraintError) {
    const fk = nombreRestriccion(err.original?.sqlMessage);
    return err.original?.errno === 1451
      ? new HttpError(409, 'No se puede eliminar: existen registros relacionados', fk && [fk])
      : new HttpError(400, 'La referencia indicada no existe', fk && [fk]);
  }

  // Validadores del modelo (notEmpty, is, min, stockValido...) -> 400
  if (err instanceof ValidationError) {
    return new HttpError(400, 'Datos no válidos', err.errors.map((e) => e.message));
  }

  // Servidor apagado, credenciales incorrectas, base inexistente -> 503
  if (err instanceof ConnectionError) {
    return new HttpError(503, 'La base de datos no está disponible');
  }

  // CHECK: 3819 en MySQL 8, 4025 en MariaDB (XAMPP) -> 400
  if (err instanceof DatabaseError && [3819, 4025].includes(err.original?.errno)) {
    const ck = nombreRestriccion(err.original.sqlMessage) ?? err.original.sqlMessage;
    return new HttpError(400, 'Se violó una regla de la base de datos', [ck]);
  }

  return err;
}
