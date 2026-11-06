import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Categoria = sequelize.define(
    'Categoria',
    {
        id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        nombre: {
            type: DataTypes.STRING(80), allowNull: false, unique: true, 
            validate:{ 
            notNull: {msg: 'El nombre es obligatorio'},
            notEmpty: {msg: 'El nombre no puede estar vacio'}
            },
            description: {type: DataTypes.STRING(255), allowNull: true}
        }
    },
    {
        tableName: 'categorias'
    }


)

