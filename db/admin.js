var configForAdmin = { database: 'sequelize_test', username: 'root', password: null };
module.exports = require('../models/index')(configForAdmin);
