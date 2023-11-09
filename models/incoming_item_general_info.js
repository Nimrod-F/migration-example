const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incoming_item_general_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    identifier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_name: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person_table',
        key: 'id'
      }
    },
    person: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'incoming_item_general_info',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__incoming__3213E83F215F067E",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
