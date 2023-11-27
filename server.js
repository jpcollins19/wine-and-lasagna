//////////////////css////////////////// ---START

/////////stage 1///////// ---START
////main page ---START
//1 row per wine
//columns for: wine #, score, and notes
//edit wine info by clicking on the wine's row - then it goes to zoomed in view

////main page ---END

////zoomed in view ---START
//columns for: wine #, score, and notes
//score === dropdown with incriment options of .5 through 5 - user can type in number too
//note section can be edited
//save button at top
//cancel button at top

////zoomed in view ---END
/////////stage 1///////// ---END

/////////stage 2///////// ---START
////main page ---START
//1 row per wine
//columns for: wine #, and total score - ordered by total score, if there is a tie, wine # is next order
//edit wine info by clicking on the wine's row - then it goes to zoomed in view

////main page ---END

/////////stage 2///////// ---END

////admin page ---START
//shows each user and a red box/red x for each wine that they haven't submitted
//can click on a user to edit their email/pw

//ability to delete a user

////admin page ---END

//////////////////css////////////////// ---END

//roll through very file and remove un-used code

////error testing ----START

///sign-in - correct error comes through if invalid cridentials

///create account - correct error comes through for:
//email address already in use
//name already in use
//pws do not match

/// verify that the site still works if some users have a null score answer for their wine

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
