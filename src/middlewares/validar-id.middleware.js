// Rechaza ids que no sean enteros positivos antes de llegar al controlador
export function validarId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'El id debe ser un entero positivo' });
  }
  next();
}
