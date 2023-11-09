const { Sequelize } = require('sequelize');
var sequelize = new Sequelize('10Management', 'root', 'Admin!09',{
    host: 'sda-db.csypfynk8iar.eu-west-1.rds.amazonaws.com',
    port:'1433',
    dialect: 'mssql'
  });

  module.exports = sequelize;