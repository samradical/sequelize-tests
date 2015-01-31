var configForAdmin = { database: 'sequelize_test', username: 'readonly', password: 'readonly' };
module.exports = require('../models/index')(configForAdmin);
