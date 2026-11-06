import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Prestamo = sequelize.define(
    'Prestamo',
    {
        id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        socio_id:{type: DataTypes.INTEGER, allowNull:false},
        libro_id:{type: DataTypes.INTEGER, allowNull:false},

        fecha_prestamo: {type: DataTypes.SMALLINT, allowNull: false,//smallint es entero chiquito
            validate:{ 
            min: {args: [1450],msg: 'El año no es válido'},
            max: {args: [new Date().getFullYear()],msg: 'El año no puede ser mayor al actual'},
            },
        },
        fecha_limite: {type: DataTypes.SMALLINT, allowNull: false,//smallint es entero chiquito
            validate:{ 
            min: {args: [1450],msg: 'El año no es válido'},
            max: {args: [new Date().getFullYear()],msg: 'El año no puede ser mayor al actual'},
            },
        },
        fecha_devolucion: {type: DataTypes.SMALLINT, allowNull: false,//smallint es entero chiquito
            validate:{ 
            min: {args: [1450],msg: 'El año no es válido'},
            max: {args: [new Date().getFullYear()],msg: 'El año no puede ser mayor al actual'},
            },
        },
        estado:{type: DataTypes.ENUM, allowNull:false },

    },
    {
        tableName: 'prestamos'
    }


)

