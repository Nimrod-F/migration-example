const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incoming_item', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: false
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
    id_incoming_general_info: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoming_item_general_info',
        key: 'id'
      }
    },
    incoming_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoming',
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
    tableName: 'incoming_item',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__incoming__3213E83F9093A51A",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
