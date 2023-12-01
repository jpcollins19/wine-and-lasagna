const {
  db,
  models: { User, Wine },
} = require("../db/index.js");

const users = [
  {
    email: "joe@gmail.com",
    password: "nugget",
    name: "joe",
    isAdmin: true,
    score1: 3.5,
    score2: 5,
    score3: 3.5,
    score4: 1.5,
    score5: 4,
    score6: 4.5,
    score7: 3,
    score8: 2,
    notes1: "this is wine 1",
    notes2: "this is wine 2 - it sucks",
    notes3:
      "this is wine 3 - it was delicious this is wine 3 - it was delici3 - it was delicious this is wine 3 - it was delici3 - it was delicious this is wine 3 - it was delicious this is wine 3 - it was delicious this is wine 3 - it was delicious",
    notes4:
      "how much wood could a wood chuck chuck is a wood chuck could chuck wood.  im currently watching aresenal and we are winning 5-0 at halftime.  5 difference players scored - havertz, jesus, saka, martinelli and odegaard!  I also won over $100 betting on a number of outcomes, all 4 of my bets hit",
    notes5: null,
    notes6: null,
    notes7: null,
    notes8: null,
    stage: 0,
  },

  //kelly
  {
    email: "kelly@gmail.com",
    password: "kelly",
    name: "kelly",
    score1: 5,
    score2: 5,
    score3: 3.5,
    score4: 1.5,
    score5: 3,
    score6: 4.5,
    score7: 3,
    score8: 2,
    notes1: null,
    notes2: null,
    notes3: null,
    notes4: null,
    notes5: null,
    notes6: null,
    notes7: null,
    notes8: null,
  },

  //nicole
  {
    email: "nicole@gmail.com",
    password: "nicole",
    name: "nicole",
    score1: 2.5,
    score2: 5,
    score3: 3.5,
    score4: 1.5,
    score5: 3,
    score6: 4.5,
    score7: 3,
    score8: 2,
    notes1: null,
    notes2: null,
    notes3: null,
    notes4: null,
    notes5: null,
    notes6: null,
    notes7: null,
    notes8: null,
  },

  //dalton
  {
    email: "dalton@gmail.com",
    password: "dalton",
    name: "dalton",
    score1: 5,
    score2: 4.5,
    score3: 3.5,
    score4: 1.5,
    score5: 3,
    score6: 4.5,
    score7: 3,
    score8: 2,
    notes1: null,
    notes2: null,
    notes3: null,
    notes4: null,
    notes5: null,
    notes6: null,
    notes7: null,
    notes8: null,
  },

  //katie
  {
    email: "katie@gmail.com",
    password: "katie",
    name: "katie",
    score1: 5,
    score2: 5,
    score3: 3.5,
    score4: 1.5,
    score5: 3,
    score6: 4.5,
    score7: 3,
    score8: 2,
    notes1: null,
    notes2: null,
    notes3: null,
    notes4: null,
    notes5: null,
    notes6: null,
    notes7: null,
    notes8: null,
  },

  //polizzi
  {
    email: "polizzi@gmail.com",
    password: "polizzi",
    name: "polizzi",
    score1: 5,
    score2: 3.5,
    score3: 3.5,
    score4: 1.5,
    score5: 3,
    score6: 4.5,
    score7: 3,
    score8: 2,
    notes1: null,
    notes2: null,
    notes3: null,
    notes4: null,
    notes5: null,
    notes6: null,
    notes7: null,
    notes8: null,
  },

  //matt
  {
    email: "matt@gmail.com",
    password: "matt",
    name: "matt",
    score1: 5,
    score2: 4,
    score3: 3.5,
    score4: 1.5,
    score5: 3,
    score6: 4.5,
    score7: 3,
    score8: 2,
    notes1: null,
    notes2: null,
    notes3: null,
    notes4: null,
    notes5: null,
    notes6: null,
    notes7: null,
    notes8: null,
  },

  //amber
  {
    email: "amber@gmail.com",
    password: "amber",
    name: "amber",
    // score1: 2.5,
    // score2: 2,
    // score3: 0.5,
    // score4: 1.5,
    // score5: 3,
    // score6: 4.5,
    // score7: 1.5,
    // score8: 4.5,
    // notes1: "",
    // notes2: "",
    // notes3: "",
    // notes4: "",
    // notes5: "",
    // notes6: "",
    // notes7: "",
    // notes8: "",
  },
];

const wines = [
  { number: 1, name: "wineNameJoe" },
  { number: 2, name: "wineNameKelly" },
  { number: 3, name: "wineNameDalton" },
  { number: 4, name: "wineNameNicole" },
  { number: 5, name: "wineNamePolizzi" },
  { number: 6, name: "wineNameKatie" },
  { number: 7, name: "wineNameMatt" },
  { number: 8, name: null },
];

const syncAndSeed = async () => {
  await db.sync({ force: true });
  /////////////////////////////////////////////////////////////
  const [joe, kelly, nicole, dalton, katie, polizzi, matt, amber] =
    await Promise.all(
      users.map((u) =>
        User.create({
          email: u.email,
          password: u.password,
          name: u.name,
          isAdmin: u.isAdmin,
          stage: u.stage,
          score1: u.score1,
          score2: u.score2,
          score3: u.score3,
          score4: u.score4,
          score5: u.score5,
          score6: u.score6,
          score7: u.score7,
          score8: u.score8,
          notes1: u.notes1,
          notes2: u.notes2,
          notes3: u.notes3,
          notes4: u.notes4,
          notes5: u.notes5,
          notes6: u.notes6,
          notes7: u.notes7,
          notes8: u.notes8,
        })
      )
    );

  await Promise.all(
    wines.map((w) =>
      Wine.create({
        number: w.number,
        name: w.name,
      })
    )
  );
};

module.exports = syncAndSeed;
