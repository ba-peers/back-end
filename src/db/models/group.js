'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    group_key: DataTypes.STRING
    
  }, {tableName:"groups"});
  Group.associate = function(models) {
    // associations can be defined here
    Group.hasMany(models.Member, {
      foreignKey: "groupId",
      as: "members"
    });

    Group.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });

  };
  return Group;
};