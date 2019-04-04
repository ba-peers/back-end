'use strict';

module.exports = function (sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    body: DataTypes.STRING,
    memberName: DataTypes.STRING
  }, { tableName: "messages" });
  Message.associate = function (models) {
    // associations can be defined here
    Message.belongsTo(models.Member, {
      foreignKey: "member_name",
      onDelete: "CASCADE"
    });
  };
  return Message;
};