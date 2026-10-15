const Sequelize = require("sequelize");
const db = require("../db.js");
require("dotenv").config();

const { UUID, UUIDV4, INTEGER, STRING } = Sequelize;

const Wine = db.define("wines", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  number: {
    type: INTEGER,
    allowNull: false,
  },
  name: {
    type: STRING,
    defaultValue: null,
  },
});

module.exports = Wine;
