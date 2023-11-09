const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incoming_item_viewbe', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    incoming_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    symbol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nr: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'incoming_item_viewbe',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__incoming__3213E83F788D0F73",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
