var configForAdmin = {
	"username": "rad",
    "password": "kingdeth",
    "database": "radmix",
    "host": "radfree.cbxauq0ss8tv.eu-west-1.rds.amazonaws.com",
    "dialect": "postgres"
};


module.exports = require('../models/index')(configForAdmin);