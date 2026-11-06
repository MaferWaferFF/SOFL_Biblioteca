import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Libro = sequelize.define(
    'Libro',
    {
        id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        categoria_id:{type: DataTypes.INTEGER, allowNull:false},
        isbn:{type: DataTypes.STRING(17), allowNull: false, unique: true,
            validate:{ 
            notNull: {msg: 'El isbn es obligatorio'},
            notEmpty: {msg: 'El isbn no puede estar vacio'}
            },
        },

        titulo: {
            type: DataTypes.STRING(200), allowNull: false, unique: true, 
            validate:{ 
            notNull: {msg: 'El título es obligatorio'},
            notEmpty: {msg: 'El títuplo no puede estar vacio'}
            },
        },

        anio: {type: DataTypes.SMALLINT, allowNull: false,//smallint es entero chiquito
            validate:{ 
            min: {args: [1450],msg: 'El año no es válido'},
            max: {args: [new Date().getFullYear()],msg: 'El año no puede ser mayor al actual'},
            },
        },
        stock_total:{type: DataTypes.INTEGER, allowNull:false, defaultValue: 1,
            validate:{ 
            min: {args: [0],msg: 'El stock total no puede negativo'},
            },
        },
        stock_disponible:{type: DataTypes.INTEGER, allowNull:false, defaultValue: 1,
            validate:{ 
            min: {args: [0],msg: 'El stock total no puede negativo'},
            },
        },
        creado_en:{type: DataTypes.TIME, allowNull:false}

    },
    {
        tableName: 'libros',
         validate: {
            stockValido(){
                if(this.stock_disponible>stockValido){
                    throw new Error('El stock disponible no puede ser mayor al stock total');
                }
            }
        }
    }


)

