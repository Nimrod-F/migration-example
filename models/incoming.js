const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incoming', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nr: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'incoming',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__incoming__3213E83FD6A1B0D4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
