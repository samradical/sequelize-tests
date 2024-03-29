"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid: DataTypes.STRING,
    //projectIds: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        /*User.hasMany(models.Project, {
          foreignKey: 'user_id',
          constraints: true
        });*/
        User.belongsToMany(models.Project, {
          through: {
            model: models.UserProject,
            unique: false
          },
          foreignKey: 'userId',
          targetKey:'id'
        });
        // associations can be defined here
        //User.hasMany(models.Project, {as:'project'});
      }
    }
  });
  return User;
};