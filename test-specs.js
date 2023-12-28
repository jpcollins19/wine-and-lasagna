const { expect } = require("chai");
const {
  cap1stLetter,
  formatURL,
  calcWineScores,
  trimNotes,
  findWine,
  findUserScores,
  userSubmittedAllScores,
} = require("./src/store/funcs");

describe("func testing", () => {
  const userData = {
    joe: [4, 4.5, 3.5, 1.5, 3, 4.5, 3, 2],
    kelly: [5, 5, 3.5, 1.5, 3, 4.5, 3, 2],
    dalton: [5, 4.5, 3.5, 1.5, 3, 4.5, 3, 2],
    nicole: [2.5, 5, 3.5, 1.5, 3, 4.5, 3, 2],
    polizzi: [5, 3.5, 3.5, 1.5, 3, 4.5, 3, 2],
    katie: [5, 5, 3.5, 1.5, 3, 4.5, 3, 2],
    matt: [5, 4, 3.5, 1.5, 3, 4.5, 3, 2],
    amber: [2.5, 2, 0.5, 1.5, 3, 4.5, 1.5, 4.5],
  };

  const createUser = (userName) => {
    const userObj = { name: userName };

    userData[userName].forEach((score, idx) => {
      const key = `wine${idx + 1}`;

      userObj[key] = { score, notes: null };
    });

    return userObj;
  };

  const userNames = [
    "joe",
    "kelly",
    "dalton",
    "nicole",
    "polizzi",
    "katie",
    "matt",
    "amber",
  ];

  describe("calcWineScores", () => {
    const wines = [
      { number: 1, name: "wineNameJoe" },
      { number: 2, name: "wineNameKelly" },
      { number: 3, name: "wineNameDalton" },
      { number: 4, name: "wineNameNicole" },
      { number: 5, name: "wineNamePolizzi" },
      { number: 6, name: "wineNameKatie" },
      { number: 7, name: "wineNameMatt" },
      { number: 8, name: "wineNameAmber" },
    ];

    describe(`with no ties`, () => {
      const users = userNames.map((userName) => createUser(userName));

      const calcWineScoresTesting = [
        { wineNum: 6, rank: 1, score: 36, name: "wineNameKatie", ave: "4.50" },
        { wineNum: 1, rank: 2, score: 34, name: "wineNameJoe", ave: "4.25" },
        {
          wineNum: 2,
          rank: 3,
          score: 33.5,
          name: "wineNameKelly",
          ave: "4.19",
        },
        { wineNum: 3, rank: 4, score: 25, name: "wineNameDalton", ave: "3.13" },
        {
          wineNum: 5,
          rank: 5,
          score: 24,
          name: "wineNamePolizzi",
          ave: "3.00",
        },
        { wineNum: 7, rank: 6, score: 22.5, name: "wineNameMatt", ave: "2.81" },
        {
          wineNum: 8,
          rank: 7,
          score: 18.5,
          name: "wineNameAmber",
          ave: "2.31",
        },
        { wineNum: 4, rank: 8, score: 12, name: "wineNameNicole", ave: "1.50" },
      ];

      calcWineScoresTesting.forEach((entry, i) => {
        const wineNumCorrect = entry.wineNum;
        const wineRankCorrect = entry.rank;
        const wineScoreCorrect = entry.score;
        const wineNameCorrect = entry.name;
        const wineAveCorrect = entry.ave;

        it(`wine #${wineNumCorrect}`, () => {
          const result = calcWineScores(users, wines);
          const wineIndexResult = result[i];
          const wineNumResult = wineIndexResult.wineNum;
          const wineRankResult = wineIndexResult.rank;
          const wineScoreResult = wineIndexResult.score;
          const wineNameResult = wineIndexResult.name;
          const wineAveResult = wineIndexResult.ave;

          expect(wineNumResult).to.equal(wineNumCorrect);
          expect(wineRankResult).to.equal(wineRankCorrect);
          expect(wineScoreResult).to.equal(wineScoreCorrect);
          expect(wineNameResult).to.equal(wineNameCorrect);
          expect(wineAveResult).to.equal(wineAveCorrect);
        });
      });
    });

    describe(`with 2 wines tied`, () => {
      const users = userNames.map((userName) => createUser(userName));

      users.forEach((u) => {
        u.wine3.score = 2;
        u.wine7.score = 2;
      });

      const calcWineScoresTesting = [
        { wineNum: 6, rank: 1, score: 36, name: "wineNameKatie", ave: "4.50" },
        { wineNum: 1, rank: 2, score: 34, name: "wineNameJoe", ave: "4.25" },
        {
          wineNum: 2,
          rank: 3,
          score: 33.5,
          name: "wineNameKelly",
          ave: "4.19",
        },
        {
          wineNum: 5,
          rank: 4,
          score: 24,
          name: "wineNamePolizzi",
          ave: "3.00",
        },
        {
          wineNum: 8,
          rank: 5,
          score: 18.5,
          name: "wineNameAmber",
          ave: "2.31",
        },
        { wineNum: 3, rank: 6, score: 16, name: "wineNameDalton", ave: "2.00" },
        { wineNum: 7, rank: 7, score: 16, name: "wineNameMatt", ave: "2.00" },
        { wineNum: 4, rank: 8, score: 12, name: "wineNameNicole", ave: "1.50" },
      ];

      calcWineScoresTesting.forEach((entry, i) => {
        const wineNumCorrect = entry.wineNum;
        const wineRankCorrect = entry.rank;
        const wineScoreCorrect = entry.score;
        const wineNameCorrect = entry.name;
        const wineAveCorrect = entry.ave;

        it(`wine #${wineNumCorrect}`, () => {
          const result = calcWineScores(users, wines);
          const wineIndexResult = result[i];
          const wineNumResult = wineIndexResult.wineNum;
          const wineRankResult = wineIndexResult.rank;
          const wineScoreResult = wineIndexResult.score;
          const wineNameResult = wineIndexResult.name;
          const wineAveResult = wineIndexResult.ave;

          expect(wineNumResult).to.equal(wineNumCorrect);
          expect(wineRankResult).to.equal(wineRankCorrect);
          expect(wineScoreResult).to.equal(wineScoreCorrect);
          expect(wineNameResult).to.equal(wineNameCorrect);
          expect(wineAveResult).to.equal(wineAveCorrect);
        });
      });
    });

    describe(`with 3 wines tied`, () => {
      const users = userNames.map((userName) => createUser(userName));

      users.forEach((u) => {
        u.wine1.score = 2.5;
        u.wine4.score = 2.5;
        u.wine7.score = 2.5;
      });

      const calcWineScoresTesting = [
        { wineNum: 6, rank: 1, score: 36, name: "wineNameKatie", ave: "4.50" },
        {
          wineNum: 2,
          rank: 2,
          score: 33.5,
          name: "wineNameKelly",
          ave: "4.19",
        },
        { wineNum: 3, rank: 3, score: 25, name: "wineNameDalton", ave: "3.13" },
        {
          wineNum: 5,
          rank: 4,
          score: 24,
          name: "wineNamePolizzi",
          ave: "3.00",
        },
        { wineNum: 1, rank: 5, score: 20, name: "wineNameJoe", ave: "2.50" },
        { wineNum: 4, rank: 6, score: 20, name: "wineNameNicole", ave: "2.50" },
        { wineNum: 7, rank: 7, score: 20, name: "wineNameMatt", ave: "2.50" },
        {
          wineNum: 8,
          rank: 8,
          score: 18.5,
          name: "wineNameAmber",
          ave: "2.31",
        },
      ];

      calcWineScoresTesting.forEach((entry, i) => {
        const wineNumCorrect = entry.wineNum;
        const wineRankCorrect = entry.rank;
        const wineScoreCorrect = entry.score;
        const wineNameCorrect = entry.name;
        const wineAveCorrect = entry.ave;

        it(`wine #${wineNumCorrect}`, () => {
          const result = calcWineScores(users, wines);
          const wineIndexResult = result[i];
          const wineNumResult = wineIndexResult.wineNum;
          const wineRankResult = wineIndexResult.rank;
          const wineScoreResult = wineIndexResult.score;
          const wineNameResult = wineIndexResult.name;
          const wineAveResult = wineIndexResult.ave;

          expect(wineNumResult).to.equal(wineNumCorrect);
          expect(wineRankResult).to.equal(wineRankCorrect);
          expect(wineScoreResult).to.equal(wineScoreCorrect);
          expect(wineNameResult).to.equal(wineNameCorrect);
          expect(wineAveResult).to.equal(wineAveCorrect);
        });
      });
    });

    describe(`with 2 diff wines tied at diff scores`, () => {
      const users = userNames.map((userName) => createUser(userName));

      users.forEach((u) => {
        u.wine1.score = 0.5;
        u.wine4.score = 0.5;
        u.wine2.score = 5;
        u.wine5.score = 5;
      });

      const calcWineScoresTesting = [
        { wineNum: 2, rank: 1, score: 40, name: "wineNameKelly", ave: "5.00" },
        {
          wineNum: 5,
          rank: 2,
          score: 40,
          name: "wineNamePolizzi",
          ave: "5.00",
        },
        { wineNum: 6, rank: 3, score: 36, name: "wineNameKatie", ave: "4.50" },
        { wineNum: 3, rank: 4, score: 25, name: "wineNameDalton", ave: "3.13" },
        { wineNum: 7, rank: 5, score: 22.5, name: "wineNameMatt", ave: "2.81" },
        {
          wineNum: 8,
          rank: 6,
          score: 18.5,
          name: "wineNameAmber",
          ave: "2.31",
        },
        { wineNum: 1, rank: 7, score: 4, name: "wineNameJoe", ave: "0.50" },
        { wineNum: 4, rank: 8, score: 4, name: "wineNameNicole", ave: "0.50" },
      ];

      calcWineScoresTesting.forEach((entry, i) => {
        const wineNumCorrect = entry.wineNum;
        const wineRankCorrect = entry.rank;
        const wineScoreCorrect = entry.score;
        const wineNameCorrect = entry.name;
        const wineAveCorrect = entry.ave;

        it(`wine #${wineNumCorrect}`, () => {
          const result = calcWineScores(users, wines);
          const wineIndexResult = result[i];
          const wineNumResult = wineIndexResult.wineNum;
          const wineRankResult = wineIndexResult.rank;
          const wineScoreResult = wineIndexResult.score;
          const wineNameResult = wineIndexResult.name;
          const wineAveResult = wineIndexResult.ave;

          expect(wineNumResult).to.equal(wineNumCorrect);
          expect(wineRankResult).to.equal(wineRankCorrect);
          expect(wineScoreResult).to.equal(wineScoreCorrect);
          expect(wineNameResult).to.equal(wineNameCorrect);
          expect(wineAveResult).to.equal(wineAveCorrect);
        });
      });
    });
  });

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

  describe("trimNotes", () => {
    const testNote_65_actual =
      "Amidst chaos, 5 resilience 7 bloom, nurturing hope and /igniting.";

    const testNote_89_actual =
      "Amidst chaos, 5 resilience 7 bloom, nurturing hope and /igniting paths #toward profound^.";

    const testNote_90_actual =
      "Amidst chaos, resilience bloom, nurturing hope and /igniting paths #toward profound^ goal.";

    const testNote_91_actual =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^ goal.";

    const testNote_91_result =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^";

    const testNote_over90_result =
      "Amidst chaos, 5 resilience 7 bloom, nurturing hope and /igniting paths #toward profound^";

    const testNote_92_actual =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^ goal@.";

    const testNote_92_result =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^";

    const testNote_96_actual =
      "Amidst chaos, 5 resilience 7 bloom, nurtur hope and /igniting paths #toward profound^ goal from.";

    const testNote_96_result =
      "Amidst chaos, 5 resilience 7 bloom, nurtur hope and /igniting paths #toward profound^ goal";

    const testNote_104_actual =
      "Amidst chaos, 5 resilience 7 bloom, nurturing hope and /igniting paths #toward profound^ transformation.";

    const testNote_127_actual =
      "Amidst chaos, 5 resilience 7 bloom, nurturing hope and /igniting paths #toward profound^ transformation. The bright$ moon soft.";

    const testNote_162_actual =
      "Amidst chaos, 5 resilience 7 bloom, nurturing hope and /igniting paths #toward profound^ transformation. The bright$ moon softly illuminated the serene night sky.";

    const testNote_nonLetterInMiddle_actual =
      "Amidst chaos, resilience bloom, nurturing hope and /igniting paths #toward profound^ goal.hello";

    const testNote_nonLetterInMiddle_result =
      "Amidst chaos, resilience bloom, nurturing hope and /igniting paths #toward profound^";

    const testNote_nonLetterInMiddle1_actual =
      "Amidst chaos, resilience bloom, nurturing hope and /igniting paths #toward profound^ goal/@!hello";

    const dollar_sign_at_end_actual =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^ goal$";

    const dollar_sign_at_end_result =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^";

    const dollar_sign_over90_actual =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^ goal $";

    const dollar_sign_over90_result =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^ goal";

    const dollar_sign_inMiddle_actual =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^ goal$jkjdf";

    const dollar_sign_inMiddle_result =
      "Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^";

    const quote_in_middle_actual = `Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^ goal"asdj`;

    const quote_in_middle_result = `Amidst chaos, 5 resilience 7 blooms, nurturing hope and /igni paths #toward profound^`;

    // console.log("byah-length", dollar_sign_ok_actual.length);

    const trimNotesTesting = [
      {
        title: "with 65 characters",
        value: testNote_65_actual,
        result: testNote_65_actual,
      },
      {
        title: "with 89 characters",
        value: testNote_89_actual,
        result: testNote_89_actual,
      },
      {
        title: "with 90 characters",
        value: testNote_90_actual,
        result: testNote_90_actual,
      },
      {
        title: "with 91 characters",
        value: testNote_91_actual,
        result: testNote_91_result,
      },
      {
        title: "with 92 characters",
        value: testNote_92_actual,
        result: testNote_92_result,
      },
      {
        title: "with 96 characters",
        value: testNote_96_actual,
        result: testNote_96_result,
      },
      {
        title: "with 104 characters",
        value: testNote_104_actual,
        result: testNote_over90_result,
      },
      {
        title: "with 127 characters",
        value: testNote_127_actual,
        result: testNote_over90_result,
      },
      {
        title: "with 162 characters",
        value: testNote_162_actual,
        result: testNote_over90_result,
      },
      {
        title: "nonLetterInMiddle #1",
        value: testNote_nonLetterInMiddle_actual,
        result: testNote_nonLetterInMiddle_result,
      },
      {
        title: "nonLetterInMiddle #2",
        value: testNote_nonLetterInMiddle1_actual,
        result: testNote_nonLetterInMiddle_result,
      },
      {
        title: "$ sign over 90 #2",
        value: testNote_nonLetterInMiddle1_actual,
        result: testNote_nonLetterInMiddle_result,
      },
      {
        title: "$ sign is last char",
        value: dollar_sign_at_end_actual,
        result: dollar_sign_at_end_result,
      },
      {
        title: "$ sign over 90 #1",
        value: dollar_sign_over90_actual,
        result: dollar_sign_over90_result,
      },
      {
        title: "$ sign in middle",
        value: dollar_sign_inMiddle_actual,
        result: dollar_sign_inMiddle_result,
      },
      {
        title: "quote in middle",
        value: quote_in_middle_actual,
        result: quote_in_middle_result,
      },
    ];
    trimNotesTesting.forEach((test) => {
      it(`${test.title}`, () => {
        const result = trimNotes(test.value);
        expect(result).to.equal(test.result);
      });
    });
  });

  const daltonNullScore = {
    name: "dalton",
    wine1: { score: 5, notes: null },
    wine2: { score: 4.5, notes: null },
    wine3: { score: 3.5, notes: null },
    wine4: { score: 1.5, notes: null },
    wine5: { score: 3, notes: null },
    wine6: { score: 4.5, notes: null },
    wine7: { score: 3, notes: null },
    wine8: { score: null, notes: null },
  };

  describe("findWine", () => {
    const wines = [
      {
        id: "bfecbdd0-6a85-47e7-9cd1-fbb925322ae1",
        number: 1,
        name: "wineNameJoe",
      },
      {
        id: "5973efcf-4760-42d2-9037-0bc0df78a801",
        number: 2,
        name: "wineNameKelly",
      },
      {
        id: "29644212-bc31-44cf-833c-73e3fb1cc906",
        number: 3,
        name: "wineNameDalton",
      },
      {
        id: "5065566d-a440-449b-a783-2ff2cd4a7d80",
        number: 4,
        name: "wineNameNicole",
      },
      {
        id: "5eaeda3e-4a52-4fbe-9ea7-5116b825549d",
        number: 6,
        name: "wineNameKatie",
      },
      {
        id: "89b62a16-9a18-4f50-9979-74e6f2eeb3da",
        number: 5,
        name: "wineNamePolizzi",
      },
      {
        id: "243cfc12-17ed-45f9-97c1-e02bb46108b8",
        number: 7,
        name: "wineNameMatt",
      },
      {
        id: "c69f56dd-43b8-4c9c-9822-b36d1e9296c4",
        number: 8,
        name: null,
      },
    ];

    const findWineTesting = [
      {
        value: "when url is rank, find wine #1",
        url: "/rank/bfecbdd0-6a85-47e7-9cd1-fbb925322ae1",
        resultId: "bfecbdd0-6a85-47e7-9cd1-fbb925322ae1",
        resultNumber: 1,
        resultName: "wineNameJoe",
      },
      {
        value: "when url is result, find wine #4",
        url: "/result/5065566d-a440-449b-a783-2ff2cd4a7d80",
        resultId: "5065566d-a440-449b-a783-2ff2cd4a7d80",
        resultNumber: 4,
        resultName: "wineNameNicole",
      },
    ];

    findWineTesting.forEach((test) => {
      it(`${test.value}`, () => {
        const result = findWine(wines, test.url);

        expect(result.id).to.equal(test.resultId);
        expect(result.number).to.equal(test.resultNumber);
        expect(result.name).to.equal(test.resultName);
      });
    });
  });

  describe("findUserScores", () => {
    const joe = createUser("joe");
    const kelly = createUser("kelly");

    const findUserScoresTesting = [
      { user: joe, result: [4, 4.5, 3.5, 1.5, 3, 4.5, 3, 2] },
      { user: kelly, result: [5, 5, 3.5, 1.5, 3, 4.5, 3, 2] },
      { user: daltonNullScore, result: [5, 4.5, 3.5, 1.5, 3, 4.5, 3, null] },
    ];

    findUserScoresTesting.forEach((test) => {
      it(`${test.user}`, () => {
        const result = findUserScores(test.user);

        for (let i = 0; i < 8; i++) {
          expect(result[i]).to.equal(test.result[i]);
        }
      });
    });
  });

  describe("userSubmittedAllScores", () => {
    const joe = createUser("joe");
    const kelly = createUser("kelly");

    const userSubmittedAllScoresTesting = [
      { user: joe, result: true },
      { user: kelly, result: true },
      { user: daltonNullScore, result: false },
    ];

    userSubmittedAllScoresTesting.forEach((test) => {
      it(`${test.user}`, () => {
        const result = userSubmittedAllScores(test.user);

        expect(result).to.equal(test.result);
      });
    });
  });
});
