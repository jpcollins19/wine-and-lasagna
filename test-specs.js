const { expect } = require("chai");
const {
  cap1stLetter,
  formatURL,
  calcWineScores,
} = require("./src/store/funcs");

describe("func testing", () => {
  describe("cap1stLetter", () => {
    const cap1stLetterTesting = [
      { value: "rank", result: "Rank" },
      { value: "name", result: "Name" },
      { value: "total", result: "Total" },
      { value: "max_Pts", result: "Max Pts" },
      { value: "pool_picks", result: "Pool Picks" },
    ];
    cap1stLetterTesting.forEach((test) => {
      it(`${test.value}`, () => {
        const result = cap1stLetter(test.value);
        expect(result).to.equal(test.result);
      });
    });
  });

  describe("formatURL", () => {
    const formatURLTesting = [
      { value: "My Picks v. Your Picks", result: "my_picks_v_your_picks" },
      { value: "Golfer v. Golfer", result: "golfer_v_golfer" },
      { value: "Who Picked This Golfer", result: "who_picked_this_golfer" },
    ];
    formatURLTesting.forEach((test) => {
      it(`${test.value}`, () => {
        const result = formatURL(test.value);
        expect(result).to.equal(test.result);
      });
    });
  });

  describe("calcWineScores", () => {
    describe(`with no ties`, () => {
      const joe = {
        id: "0ffe522f-aed4-4e50-a6ac-3785e0d7190c",
        email: "joe@gmail.com",
        name: "joe",
        admin: true,
        stage: 1,
        wine1: { score: 4, notes: null },
        wine2: { score: 4.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const kelly = {
        id: "22bc9da5-ab40-450e-adf4-2fcbbf6ad762",
        email: "kelly@gmail.com",
        name: "kelly",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const dalton = {
        id: "35be5ddf-683f-4482-995a-ac89fd573923",
        email: "dalton@gmail.com",
        name: "dalton",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 4.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const nicole = {
        id: "5fb52645-0065-4cfe-a7d3-dfce1dbb52ab",
        email: "nicole@gmail.com",
        name: "nicole",
        admin: false,
        stage: 1,
        wine1: { score: 2.5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const polizzi = {
        id: "93a3182f-dc3d-4db4-8a59-00931324cffe",
        email: "polizzi@gmail.com",
        name: "polizzi",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: "this wine sucks" },
        wine2: { score: 3.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const katie = {
        id: "7c9282d7-b849-44a2-becb-73e58e4734ce",
        email: "katie@gmail.com",
        name: "katie",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const matt = {
        id: "3c9b9a57-3553-4169-9c82-3fef4721810e",
        email: "matt@gmail.com",
        name: "matt",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 4, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const amber = {
        id: "a81f37c3-c552-4a47-8aac-3cc1fd8f434a",
        email: "amber@gmail.com",
        name: "amber",
        admin: false,
        stage: 1,
        wine1: { score: 2.5, notes: null },
        wine2: { score: 2, notes: null },
        wine3: { score: 0.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 1.5, notes: null },
        wine8: { score: 4.5, notes: null },
      };

      users = [joe, kelly, dalton, nicole, polizzi, katie, matt, amber];

      const calcWineScoresTesting = [
        { wineNum: 6, rank: 1, score: 36 },
        { wineNum: 1, rank: 2, score: 34 },
        { wineNum: 2, rank: 3, score: 33.5 },
        { wineNum: 3, rank: 4, score: 25 },
        { wineNum: 5, rank: 5, score: 24 },
        { wineNum: 7, rank: 6, score: 22.5 },
        { wineNum: 8, rank: 7, score: 18.5 },
        { wineNum: 4, rank: 8, score: 12 },
      ];

      calcWineScoresTesting.forEach((entry, i) => {
        const wineNumCorrect = entry.wineNum;
        const wineRankCorrect = entry.rank;
        const wineScoreCorrect = entry.score;

        it(`wine #${wineNumCorrect}`, () => {
          const result = calcWineScores(users);
          const wineIndexResult = result[i];
          const wineNumResult = wineIndexResult.wineNum;
          const wineRankResult = wineIndexResult.rank;
          const wineScoreResult = wineIndexResult.score;

          expect(wineNumResult).to.equal(wineNumCorrect);
          expect(wineRankResult).to.equal(wineRankCorrect);
          expect(wineScoreResult).to.equal(wineScoreCorrect);
        });
      });
    });

    describe(`with 2 wines tied`, () => {
      const joe = {
        id: "0ffe522f-aed4-4e50-a6ac-3785e0d7190c",
        email: "joe@gmail.com",
        name: "joe",
        admin: true,
        stage: 1,
        wine1: { score: 4, notes: null },
        wine2: { score: 4.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const kelly = {
        id: "22bc9da5-ab40-450e-adf4-2fcbbf6ad762",
        email: "kelly@gmail.com",
        name: "kelly",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const dalton = {
        id: "35be5ddf-683f-4482-995a-ac89fd573923",
        email: "dalton@gmail.com",
        name: "dalton",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 4.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const nicole = {
        id: "5fb52645-0065-4cfe-a7d3-dfce1dbb52ab",
        email: "nicole@gmail.com",
        name: "nicole",
        admin: false,
        stage: 1,
        wine1: { score: 2.5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const polizzi = {
        id: "93a3182f-dc3d-4db4-8a59-00931324cffe",
        email: "polizzi@gmail.com",
        name: "polizzi",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: "this wine sucks" },
        wine2: { score: 3.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const katie = {
        id: "7c9282d7-b849-44a2-becb-73e58e4734ce",
        email: "katie@gmail.com",
        name: "katie",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const matt = {
        id: "3c9b9a57-3553-4169-9c82-3fef4721810e",
        email: "matt@gmail.com",
        name: "matt",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 4, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const amber = {
        id: "a81f37c3-c552-4a47-8aac-3cc1fd8f434a",
        email: "amber@gmail.com",
        name: "amber",
        admin: false,
        stage: 1,
        wine1: { score: 2.5, notes: null },
        wine2: { score: 2, notes: null },
        wine3: { score: 0.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 1.5, notes: null },
        wine8: { score: 4.5, notes: null },
      };

      const users = [joe, kelly, dalton, nicole, polizzi, katie, matt, amber];

      users.forEach((u) => {
        u.wine3.score = 2;
        u.wine7.score = 2;
      });

      const calcWineScoresTesting = [
        { wineNum: 6, rank: 1, score: 36 },
        { wineNum: 1, rank: 2, score: 34 },
        { wineNum: 2, rank: 3, score: 33.5 },
        { wineNum: 5, rank: 4, score: 24 },
        { wineNum: 8, rank: 5, score: 18.5 },
        { wineNum: 3, rank: 6, score: 16 },
        { wineNum: 7, rank: 7, score: 16 },
        { wineNum: 4, rank: 8, score: 12 },
      ];

      calcWineScoresTesting.forEach((entry, i) => {
        const wineNumCorrect = entry.wineNum;
        const wineRankCorrect = entry.rank;
        const wineScoreCorrect = entry.score;

        it(`wine #${wineNumCorrect}`, () => {
          const result = calcWineScores(users);
          const wineIndexResult = result[i];
          const wineNumResult = wineIndexResult.wineNum;
          const wineRankResult = wineIndexResult.rank;
          const wineScoreResult = wineIndexResult.score;

          expect(wineNumResult).to.equal(wineNumCorrect);
          expect(wineRankResult).to.equal(wineRankCorrect);
          expect(wineScoreResult).to.equal(wineScoreCorrect);
        });
      });
    });

    describe(`with 3 wines tied`, () => {
      const joe = {
        id: "0ffe522f-aed4-4e50-a6ac-3785e0d7190c",
        email: "joe@gmail.com",
        name: "joe",
        admin: true,
        stage: 1,
        wine1: { score: 4, notes: null },
        wine2: { score: 4.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const kelly = {
        id: "22bc9da5-ab40-450e-adf4-2fcbbf6ad762",
        email: "kelly@gmail.com",
        name: "kelly",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const dalton = {
        id: "35be5ddf-683f-4482-995a-ac89fd573923",
        email: "dalton@gmail.com",
        name: "dalton",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 4.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const nicole = {
        id: "5fb52645-0065-4cfe-a7d3-dfce1dbb52ab",
        email: "nicole@gmail.com",
        name: "nicole",
        admin: false,
        stage: 1,
        wine1: { score: 2.5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const polizzi = {
        id: "93a3182f-dc3d-4db4-8a59-00931324cffe",
        email: "polizzi@gmail.com",
        name: "polizzi",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: "this wine sucks" },
        wine2: { score: 3.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const katie = {
        id: "7c9282d7-b849-44a2-becb-73e58e4734ce",
        email: "katie@gmail.com",
        name: "katie",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const matt = {
        id: "3c9b9a57-3553-4169-9c82-3fef4721810e",
        email: "matt@gmail.com",
        name: "matt",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 4, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const amber = {
        id: "a81f37c3-c552-4a47-8aac-3cc1fd8f434a",
        email: "amber@gmail.com",
        name: "amber",
        admin: false,
        stage: 1,
        wine1: { score: 2.5, notes: null },
        wine2: { score: 2, notes: null },
        wine3: { score: 0.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 1.5, notes: null },
        wine8: { score: 4.5, notes: null },
      };

      const users = [joe, kelly, dalton, nicole, polizzi, katie, matt, amber];

      users.forEach((u) => {
        u.wine1.score = 2.5;
        u.wine4.score = 2.5;
        u.wine7.score = 2.5;
      });

      const calcWineScoresTesting = [
        { wineNum: 6, rank: 1, score: 36 },
        { wineNum: 2, rank: 2, score: 33.5 },
        { wineNum: 3, rank: 3, score: 25 },
        { wineNum: 5, rank: 4, score: 24 },
        { wineNum: 1, rank: 5, score: 20 },
        { wineNum: 4, rank: 6, score: 20 },
        { wineNum: 7, rank: 7, score: 20 },
        { wineNum: 8, rank: 8, score: 18.5 },
      ];

      calcWineScoresTesting.forEach((entry, i) => {
        const wineNumCorrect = entry.wineNum;
        const wineRankCorrect = entry.rank;
        const wineScoreCorrect = entry.score;

        it(`wine #${wineNumCorrect}`, () => {
          const result = calcWineScores(users);
          const wineIndexResult = result[i];
          const wineNumResult = wineIndexResult.wineNum;
          const wineRankResult = wineIndexResult.rank;
          const wineScoreResult = wineIndexResult.score;

          expect(wineNumResult).to.equal(wineNumCorrect);
          expect(wineRankResult).to.equal(wineRankCorrect);
          expect(wineScoreResult).to.equal(wineScoreCorrect);
        });
      });
    });

    describe(`with 2 diff wines tied at diff scores`, () => {
      const joe = {
        id: "0ffe522f-aed4-4e50-a6ac-3785e0d7190c",
        email: "joe@gmail.com",
        name: "joe",
        admin: true,
        stage: 1,
        wine1: { score: 4, notes: null },
        wine2: { score: 4.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const kelly = {
        id: "22bc9da5-ab40-450e-adf4-2fcbbf6ad762",
        email: "kelly@gmail.com",
        name: "kelly",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const dalton = {
        id: "35be5ddf-683f-4482-995a-ac89fd573923",
        email: "dalton@gmail.com",
        name: "dalton",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 4.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const nicole = {
        id: "5fb52645-0065-4cfe-a7d3-dfce1dbb52ab",
        email: "nicole@gmail.com",
        name: "nicole",
        admin: false,
        stage: 1,
        wine1: { score: 2.5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const polizzi = {
        id: "93a3182f-dc3d-4db4-8a59-00931324cffe",
        email: "polizzi@gmail.com",
        name: "polizzi",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: "this wine sucks" },
        wine2: { score: 3.5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const katie = {
        id: "7c9282d7-b849-44a2-becb-73e58e4734ce",
        email: "katie@gmail.com",
        name: "katie",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 5, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const matt = {
        id: "3c9b9a57-3553-4169-9c82-3fef4721810e",
        email: "matt@gmail.com",
        name: "matt",
        admin: false,
        stage: 1,
        wine1: { score: 5, notes: null },
        wine2: { score: 4, notes: null },
        wine3: { score: 3.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 3, notes: null },
        wine8: { score: 2, notes: null },
      };

      const amber = {
        id: "a81f37c3-c552-4a47-8aac-3cc1fd8f434a",
        email: "amber@gmail.com",
        name: "amber",
        admin: false,
        stage: 1,
        wine1: { score: 2.5, notes: null },
        wine2: { score: 2, notes: null },
        wine3: { score: 0.5, notes: null },
        wine4: { score: 1.5, notes: null },
        wine5: { score: 3, notes: null },
        wine6: { score: 4.5, notes: null },
        wine7: { score: 1.5, notes: null },
        wine8: { score: 4.5, notes: null },
      };

      const users = [joe, kelly, dalton, nicole, polizzi, katie, matt, amber];

      users.forEach((u) => {
        u.wine1.score = 0.5;
        u.wine4.score = 0.5;
        u.wine2.score = 5;
        u.wine5.score = 5;
      });

      const calcWineScoresTesting = [
        { wineNum: 2, rank: 1, score: 40 },
        { wineNum: 5, rank: 2, score: 40 },
        { wineNum: 6, rank: 3, score: 36 },
        { wineNum: 3, rank: 4, score: 25 },
        { wineNum: 7, rank: 5, score: 22.5 },
        { wineNum: 8, rank: 6, score: 18.5 },
        { wineNum: 1, rank: 7, score: 4 },
        { wineNum: 4, rank: 8, score: 4 },
      ];

      calcWineScoresTesting.forEach((entry, i) => {
        const wineNumCorrect = entry.wineNum;
        const wineRankCorrect = entry.rank;
        const wineScoreCorrect = entry.score;

        it(`wine #${wineNumCorrect}`, () => {
          const result = calcWineScores(users);
          const wineIndexResult = result[i];
          const wineNumResult = wineIndexResult.wineNum;
          const wineRankResult = wineIndexResult.rank;
          const wineScoreResult = wineIndexResult.score;

          expect(wineNumResult).to.equal(wineNumCorrect);
          expect(wineRankResult).to.equal(wineRankCorrect);
          expect(wineScoreResult).to.equal(wineScoreCorrect);
        });
      });
    });
  });
});
