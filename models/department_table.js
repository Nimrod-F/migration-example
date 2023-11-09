const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department_table', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    local: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    special: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'department_table',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__departme__3213E83FD0D947E9",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
