const findJoe = (arr) => {
  return arr.find((user) => user?.admin);
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

const calcWineScores = (arr) => {
  const result = [];

  for (let i = 1; i <= 8; i++) {
    result.push({ wineNum: i, rank: 0, score: 0 });
  }

  // adding each user's scores to the result
  arr.forEach((u) => {
    const logger = u.name === "joe";

    for (let i = 1; i <= 8; i++) {
      const userWineNum = i;
      const userWineAnswer = u[`wine${userWineNum}`];

      const userWineScore = userWineAnswer.score;

      result.forEach((resultWine) => {
        const resultWineNum = resultWine.wineNum;

        if (resultWineNum === userWineNum) {
          resultWine.score = resultWine.score + userWineScore;
        }
      });
    }
  });

  //ordering the wines based on total score
  result.sort((a, b) => b.score - a.score);

  let rank = 1;

  //ranking wines based on prior ordering
  result.forEach((wine) => {
    wine.rank = rank;
    rank++;
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

module.exports = {
  findJoe,
  cap1stLetter,
  formatURL,
  formatEmail,
  calcWineScores,
  validateEmail,
  getUserNames,
  trimNotes,
};
