import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Autor = sequelize.define(
    'Autor',
    {
        id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        nombres: {type: DataTypes.STRING(100), allowNull: false, unique: true, 
        validate:{ 
            notNull: {msg: 'El nombre es obligatorio'},
            notEmpty: {msg: 'El nombre no puede estar vacio'}
        }},

        apellidos: {type: DataTypes.STRING(100), allowNull: false, unique: true, 
        validate:{ 
            notNull: {msg: 'El apellido es obligatorio'},
            notEmpty: {msg: 'El apellido no puede estar vacio'}
        }},
        nacionalidad: {type: DataTypes.STRING(60), allowNull: false, unique: true}
    },
    {
        tableName: 'autores'
    }


)

