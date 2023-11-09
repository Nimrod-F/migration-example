const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('special_operation_table', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'special_operation_table',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__special___3213E83FBBB83F65",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
