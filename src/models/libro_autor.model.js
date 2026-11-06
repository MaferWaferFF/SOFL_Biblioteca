import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Libro_Autor = sequelize.define(
    'Libro_Autor',
    {
        id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        libro_id:{type: DataTypes.INTEGER, allowNull:false},
        autor_id:{type: DataTypes.INTEGER, allowNull:false}
    },
    {
        tableName: 'libro_autor'
    }


)

