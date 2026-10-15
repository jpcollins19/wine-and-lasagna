const app = require("express").Router();

const {
  models: { Wine },
} = require("../db/index.js");

app.get("/api/wines", async (req, res, next) => {
  try {
    const wines = await Wine.findAll();
    res.send(wines);
  } catch (err) {
    next(err);
  }
});

app.put("/api/wines/:id", async (req, res, next) => {
  try {
    const wine = await Wine.findByPk(req.params.id);
    res.status(204).send(await wine.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = app;
