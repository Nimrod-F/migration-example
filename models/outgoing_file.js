const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('outgoing_file', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    outgoing_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'outgoing',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'outgoing_file',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__outgoing__3213E83F6E7A9AAB",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
