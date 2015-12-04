"use strict";
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

        /* Project.belongsTo(models.User, {
           foreignKey: 'user_id',
           constraints: true
         });*/

        Project.belongsToMany(models.User, {
          through: {
            model: models.UserProject,
            unique: false
          },
          foreignKey: 'projectId',
          targetKey:'id'
        });


        // associations can be defined here
        //models.Project.hasOne(models.Users);
        // models.Project.belongsTo(models.Users, {as:"user"});
      }
    }
  });
  return Project;
};