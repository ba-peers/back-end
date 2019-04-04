'use strict';

module.exports = function (sequelize, DataTypes) {
  var Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    group_key: DataTypes.STRING

  }, { tableName: "groups" });

  Group.associate = function (models) {
    // associations can be defined here
    Group.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });

    Group.hasMany(models.Member, {
      foreignKey: "groupId"
    });
  };
  return Group;
};