const db = require("./db");
const User = require("./models/User");
const Wine = require("./models/Wine");

module.exports = {
  db,
  models: {
    User,
    Wine,
  },
};
