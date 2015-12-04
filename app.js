var db = {
  admin: require('./db/admin')
};

db.admin.sequelize.sync({
  force: true
}).then(function() {
  db.admin.Project.create({
    name: 'qq',
    uuid: 'qq'
  });
  db.admin.Project.create({
    name: 'ee',
    uuid: 'ee'
  });
  db.admin.Project.create({
    name: 'rr',
    uuid: 'rr'
  });
  db.admin.Project.create({
    name: 'tt',
    uuid: 'tt'
  });

  db.admin.User.create({
    name: '11',
    uuid: '11'
  });

  db.admin.User.create({
    name: '22',
    uuid: '22'
  });

  db.admin.User.create({
    name: '33',
    uuid: '33'
  });

  db.admin.User.create({
    name: '44',
    uuid: '44'
  });

  db.admin.UserProject.create({
    userId: 1,
    projectId: 4
  });

  db.admin.UserProject.create({
    userId: 2,
    projectId: 3
  });

  db.admin.UserProject.create({
    userId: 3,
    projectId: 2
  });

  db.admin.UserProject.create({
    userId: 4,
    projectId: 1
  });

  db.admin.UserProject.create({
    userId: 1,
    projectId: 2
  });

  db.admin.UserProject.create({
    userId: 1,
    projectId: 3
  });


  /*db.admin.UserProject.create({
    userUuid: 1,
    projectUuid: 1
  })

  db.admin.UserProject.create({
    userUuid: 1,
    projectUuid: 1
  })

  db.admin.UserProject.create({
    userUuid: 1,
    projectUuid: 1
  })

  db.admin.UserProject.create({
    userUuid: 1,
    projectUuid: 1
  }).then(function() {
    db.admin.Project.findAll({
      where: {
        uuid: 'qq'
      },
      include: [{
        model: db.admin.User,
        through: {
          model: db.admin.UserProject,
          where: {}
        }
      }]
    }).then(function(res) {
      var v = res[0];
      console.log(v.dataValues);
    })
  });*/

  /*db.admin.Project.findAll({
    where: {
      uuid: 'qq'
    },
    include: [{
      model: db.admin.User,
      through: {
        model: db.admin.UserProject,
        where: {}
      }
    }]
  }).then(function(res) {
    var v = res[0];
    console.log(v.dataValues);
  });*/

  setTimeout(function() {

    db.admin.User.findAll({
      where: {
        uuid: '11'
      },
      include: [{
        model: db.admin.Project,
        through: {
          model: db.admin.UserProject,
          where: {
            userId: 1
          }
        }
      }]
    }).then(function(res) {
      console.log(res.length);
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].dataValues);
      }
    });

  }, 1000);
}).then(function() {}).catch(function(err) {
  console.log(err)
});