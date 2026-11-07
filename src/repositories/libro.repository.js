import {Op} from 'sequelize';
import {Libro} from '../models/libro.model.js';
import {plano} from '../utils/plano.js';

export async function filtrar({q}={}){
    const where = q ? { //para filrar por título o ISBN
        [Op.or]:[
            {titulo: {[Op.like]: `%${q}%`}},
            {isbn: {[Op.like]: `%${q}%`}}
        ]
    }:{};
    return (await Libro.findAll({where, order:['titulo', 'ASC']})).map(plano);
}