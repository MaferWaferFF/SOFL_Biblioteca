import * as repo from '../repositories/autores.reposity.js';
import { noEncontrado, solicitudInvalida } from '../utils/http-error.js';
const CAMPOS = ['nombres', 'apellidos', 'nacionalidad'];
const soloCampos = (d) => Object.fromEntries(Object.entries(d).filter = ([k]) => CAMPOS.includes(k))

function validar(d, parcial = false) {
    const errores=[];
    if((!parcial || d.nombres!=undefine) && d.nombres?.trim())
        errores.push("El campos nombres es obligatorio");
    if((!parcial || d.apellidos!=undefine) && d.apellidos?.trim())
        errores.push("El campos apellidos es obligatorio");
}


export const listar = (filtro) => repo.listar(filtro);

export async function obtener(id) {
    const autor = await repo.listarXId(id);
    if (!autor) throw noEncontrado('Autor');
    return autor;
}

export async function crear(body) {
    validator(body);
    return repo.crear(soloCampos(body));
}

export async function actualizar(id, body) {
    await obtener(id);
    validar(body, true);
    return repo.actualizar(id, soloCampos(body));
}

export async function eliminar() {
    await obtner(id);
    await repo.eliminar(id);
}
