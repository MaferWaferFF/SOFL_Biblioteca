// Error con código HTTP: lo lanzan los servicios y lo responde el manejador central
export class HttpError extends Error {
  constructor(status, message, detalles) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    if (detalles) this.detalles = detalles;
  }
}

export const solicitudInvalida = (mensaje, detalles) => new HttpError(400, mensaje, detalles);
export const noEncontrado = (recurso) => new HttpError(404, `${recurso} no existe`);
export const conflicto = (mensaje) => new HttpError(409, mensaje);
