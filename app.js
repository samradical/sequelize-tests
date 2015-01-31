var db = {
  admin: require('./db/admin'),
  readonly: require('./db/readonly')
};

db.admin.sequelize.sync({ force: true }).then(function () {
  return db.admin.User.create({ name: 'john' })
}).then(function () {
  return db.readonly.User.create({ name: 'smth' })
}).catch(function (err) {
  console.log(err)
}).then(function () {
  return db.readonly.User.findAll()
}).then(function (users) {
  console.log(users.map(function (user) { return user.values }))
});
