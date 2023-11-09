var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('10Management', 'root', 'Admin!09',{
  host: 'sda-db.csypfynk8iar.eu-west-1.rds.amazonaws.com',
  port:'1433',
  dialect: 'mssql'
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});