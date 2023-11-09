const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person_table', {
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
    tableName: 'person_table',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__person_t__3213E83F5F50BD3D",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
