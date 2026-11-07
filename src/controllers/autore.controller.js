import * as service from '../services/autores.service.js';

export async function listar(req, res) {
    res.json(await service.listar({ q: req.query.q }));
}

export async function obtener(req, res) {
    res.json(await service.obtener(Number(req.params.id)));
}

export async function crear(req, res) {
    const creado = await service.crear(req,body);
    res.status(201).location(`/api/autores/${creado.id}`).json(creado);
}

export async function actualizar(req, res) {
    res.json(await service.actualizar(req.params.id, req.body));
}

export async function eliminar(req, res) {
    res.json(await service.eliminar(Number(req.params.id)));
    res.status(204).end();
}

