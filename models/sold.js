const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sold', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    symbol: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sold',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sold__6F16C1A23E898965",
        unique: true,
        fields: [
          { name: "name" },
          { name: "symbol" },
        ]
      },
    ]
  });
};
