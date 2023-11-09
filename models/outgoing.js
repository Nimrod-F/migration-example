const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('outgoing', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_currency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'currency_table',
        key: 'id'
      }
    },
    id_department: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'department_table',
        key: 'id'
      }
    },
    id_name: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person_table',
        key: 'id'
      }
    },
    id_special_operation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'special_operation_table',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'outgoing',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__outgoing__3213E83FD41342A6",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
