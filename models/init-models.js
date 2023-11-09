var DataTypes = require("sequelize").DataTypes;
var _currency_table = require("./currency_table");
var _department_table = require("./department_table");
var _incoming = require("./incoming");
var _incoming_item = require("./incoming_item");
var _incoming_item_general_info = require("./incoming_item_general_info");
var _incoming_item_generatebe = require("./incoming_item_generatebe");
var _incoming_item_viewbe = require("./incoming_item_viewbe");
var _outgoing = require("./outgoing");
var _outgoing_file = require("./outgoing_file");
var _person_table = require("./person_table");
var _sold = require("./sold");
var _special_operation_table = require("./special_operation_table");

function initModels(sequelize) {
  var currency_table = _currency_table(sequelize, DataTypes);
  var department_table = _department_table(sequelize, DataTypes);
  var incoming = _incoming(sequelize, DataTypes);
  var incoming_item = _incoming_item(sequelize, DataTypes);
  var incoming_item_general_info = _incoming_item_general_info(sequelize, DataTypes);
  var incoming_item_generatebe = _incoming_item_generatebe(sequelize, DataTypes);
  var incoming_item_viewbe = _incoming_item_viewbe(sequelize, DataTypes);
  var outgoing = _outgoing(sequelize, DataTypes);
  var outgoing_file = _outgoing_file(sequelize, DataTypes);
  var person_table = _person_table(sequelize, DataTypes);
  var sold = _sold(sequelize, DataTypes);
  var special_operation_table = _special_operation_table(sequelize, DataTypes);

  incoming_item.belongsTo(currency_table, { as: "id_currency_currency_table", foreignKey: "id_currency"});
  currency_table.hasMany(incoming_item, { as: "incoming_items", foreignKey: "id_currency"});
  outgoing.belongsTo(currency_table, { as: "id_currency_currency_table", foreignKey: "id_currency"});
  currency_table.hasMany(outgoing, { as: "outgoings", foreignKey: "id_currency"});
  incoming_item.belongsTo(department_table, { as: "id_department_department_table", foreignKey: "id_department"});
  department_table.hasMany(incoming_item, { as: "incoming_items", foreignKey: "id_department"});
  outgoing.belongsTo(department_table, { as: "id_department_department_table", foreignKey: "id_department"});
  department_table.hasMany(outgoing, { as: "outgoings", foreignKey: "id_department"});
  incoming_item.belongsTo(incoming, { as: "incoming", foreignKey: "incoming_id"});
  incoming.hasMany(incoming_item, { as: "incoming_items", foreignKey: "incoming_id"});
  incoming_item.belongsTo(incoming_item_general_info, { as: "id_incoming_general_info_incoming_item_general_info", foreignKey: "id_incoming_general_info"});
  incoming_item_general_info.hasMany(incoming_item, { as: "incoming_items", foreignKey: "id_incoming_general_info"});
  outgoing_file.belongsTo(outgoing, { as: "outgoing", foreignKey: "outgoing_id"});
  outgoing.hasMany(outgoing_file, { as: "outgoing_files", foreignKey: "outgoing_id"});
  incoming_item_general_info.belongsTo(person_table, { as: "id_name_person_table", foreignKey: "id_name"});
  person_table.hasMany(incoming_item_general_info, { as: "incoming_item_general_infos", foreignKey: "id_name"});
  outgoing.belongsTo(person_table, { as: "id_name_person_table", foreignKey: "id_name"});
  person_table.hasMany(outgoing, { as: "outgoings", foreignKey: "id_name"});
  incoming_item.belongsTo(special_operation_table, { as: "id_special_operation_special_operation_table", foreignKey: "id_special_operation"});
  special_operation_table.hasMany(incoming_item, { as: "incoming_items", foreignKey: "id_special_operation"});
  outgoing.belongsTo(special_operation_table, { as: "id_special_operation_special_operation_table", foreignKey: "id_special_operation"});
  special_operation_table.hasMany(outgoing, { as: "outgoings", foreignKey: "id_special_operation"});

  return {
    currency_table,
    department_table,
    incoming,
    incoming_item,
    incoming_item_general_info,
    incoming_item_generatebe,
    incoming_item_viewbe,
    outgoing,
    outgoing_file,
    person_table,
    sold,
    special_operation_table,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
