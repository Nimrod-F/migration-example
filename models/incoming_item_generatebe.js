const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incoming_item_generatebe', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    local: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    symbol: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'incoming_item_generatebe',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__incoming__3213E83FAE242828",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
