const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currency_table', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    symbol: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'currency_table',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__currency__3213E83FE6AEEEE4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
