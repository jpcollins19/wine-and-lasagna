const { wineNums } = require("./global_variables");

const findJoe = (arr) => {
  return arr.find((user) => user.isAdmin);
};

const cap1stLetter = (str) => {
  let capLetterNeeded = false;

  return str
    .split("")
    .map((letter, idx) => {
      if (idx === 0) letter = letter.toUpperCase();

      if (capLetterNeeded) {
        letter = letter.toUpperCase();
        capLetterNeeded = false;
      }

      if (letter === "_") {
        capLetterNeeded = true;
        letter = " ";
      }

      return letter;
    })
    .join("");
};

const formatURL = (str) => {
  const space = /\s/g;
  const period = /\./g;

  return str.toLowerCase().replaceAll(space, "_").replaceAll(period, "");
};

const formatEmail = (email) => {
  const regex = /[a-zA-Z]/g;

  email = email
    .split("")
    .map((letter) => {
      if (letter.match(regex)) {
        letter = letter.toLowerCase();
      }
      return letter;
    })
    .join("");
  return email;
};

const calcWineScores = (users, wines) => {
  const result = [];

  for (let i = 1; i <= 8; i++) {
    result.push({ wineNum: i, rank: 0, score: 0, userNotes: [] });
  }

  wines.forEach((wine) => {
    result.forEach((wineResult) => {
      if (wine.number === wineResult.wineNum) {
        wineResult.id = wine.id;
        wineResult.name = wine.name;
      }
    });
  });

  // adding each user's scores to the result
  users.forEach((u) => {
    for (let i = 1; i <= 8; i++) {
      const userWineNum = i;
      const userWineAnswer = u[`wine${userWineNum}`];

      const userWineScore = userWineAnswer.score;
      let userWineNotes = userWineAnswer.notes;

      if (userWineNotes === null || !userWineNotes.length) {
        userWineNotes = "----";
      }

      result.forEach((resultWine) => {
        const resultWineNum = resultWine.wineNum;

        if (resultWineNum === userWineNum) {
          resultWine.score = resultWine.score + userWineScore;

          const userObj = {
            name: u.name,
            score: userWineScore,
            notes: userWineNotes,
          };

          resultWine.userNotes.push(userObj);
        }
      });
    }
  });

  //ordering the wines based on total score
  result.sort((a, b) => b.score - a.score);

  //ordering the userNotes based on wineRank
  result.forEach((wine) => {
    wine.userNotes.sort((a, b) => b.score - a.score);
  });

  let rank = 1;

  //ranking wines based on prior ordering
  result.forEach((wine) => {
    wine.rank = rank;
    rank++;

    const ave = wine.score / 8;

    wine.ave = ave.toFixed(2);
  });

  return result;
};

const validateEmail = (inputText) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return inputText.match(mailformat) ? true : false;
};

const getUserNames = (arr) => {
  return arr.map((user) => {
    const name = user.name
      .split("")
      .map((letter) => letter.toLowerCase())
      .join("");
    return name;
  });
};

const clearArr = (arr) => {
  while (arr.length) {
    arr.pop();
    return clearArr(arr);
  }
};

const trimNotes = (str) => {
  if (str.length <= 90) return str;

  const split = str.split("");

  const answer = [];
  const currentWord = [];

  split.forEach((char, idx) => {
    const lastIdx = idx === str.length - 1;

    const nextChar = str[idx + 1];

    const space = " ";
    const isNextCharASpace = !lastIdx && nextChar === space;

    currentWord.push(char);

    if (isNextCharASpace) {
      const currentWordLength = currentWord.length;
      const answerLength = answer.length;

      if (currentWordLength + answerLength <= 90) {
        currentWord.forEach((letter) => answer.push(letter));

        clearArr(currentWord);
      }
    }
  });

  const lastAnswerChar = answer[answer.length - 1];

  if (lastAnswerChar === " ") {
    answer.pop();
  }

  return answer.join("");
};

const findWine = (wines, url) => {
  const wineId = url.split("/")[2];
  return wines.find((wine) => wine.id === wineId);
};

const convertNumToDropdownOption = (num) => {
  const isInt = Number.isInteger(num);

  num = isInt ? num + ".0" : num;

  return { value: num, label: num };
};

const findUserScores = (user) => {
  return wineNums.map((num) => user[`wine${num}`]["score"]);
};

const userSubmittedAllScores = (user) => {
  const userScores = findUserScores(user);

  return !userScores.includes(null);
};

const getCurrentWineRankData = (users, wines, joe) => {
  let rankInfo = calcWineScores(users, wines);

  rankInfo = rankInfo.filter((wine) => wine.wineNum <= joe.stage);

  let rank = 1;

  rankInfo.forEach((wine) => (wine.rank = rank++));

  return rankInfo;
};

module.exports = {
  findJoe,
  cap1stLetter,
  formatURL,
  formatEmail,
  calcWineScores,
  validateEmail,
  getUserNames,
  trimNotes,
  findWine,
  convertNumToDropdownOption,
  findUserScores,
  userSubmittedAllScores,
  getCurrentWineRankData,
};
