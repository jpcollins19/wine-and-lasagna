////error testing ----START

///sign-in - correct error comes through if invalid cridentials

///create account - correct error comes through for:
//email address already in use
//name already in use
//pws do not match

//single wine rank page - cannot submit with a null score

/// verify that the site still works if some users have a null score answer for their wine
//login via incognito window and put yourself and Dalton at a diff state as far as how many wines that you have answered for

////error testing ----START

///sign in and create account pages - hot-toast icon shows correctly when invalid cridentials are input
//action confirmation page work
//no match page work
////feature testing ----END

const express = require("express");
const app = express();
const syncAndSeed = require("./server/script/seed");
const path = require("path");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

// app.use("/public/css", express.static(path.join(__dirname, "public/css")));
// app.use("/public/pics", express.static(path.join(__dirname, "public/pics")));

app.use("/", require("./server/api/wines.js"));
app.use("/", require("./server/api/users.js"));
app.use("/", require("./server/api/auth.js"));
app.use("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "html/main.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 1919;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
