"use strict";
module.exports = function(sequelize, DataTypes) {
  var UserProject = sequelize.define("UserProject", {
     projectId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references:{
            model: sequelize.models.Project,
            key:'id'
        },
        referencesKey: "id"
    },
    userId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references:{
            model: sequelize.models.User,
            key: "id"
        }
    }
    /*projectUuid: DataTypes.STRING,
    userUuid: DataTypes.STRING*/
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  console.log(sequelize.models.User);
  console.log(UserProject);
  return UserProject;
};