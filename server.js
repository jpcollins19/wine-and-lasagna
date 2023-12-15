//////////////////css////////////////// ---START

////admin page ---START
///stage 0 --START

//shows each user and a red x or green checkmark based on their wine rank submission
//can click on a user to edit their pw and stage

//cannot change to stage 1 until all users submit their answers

///stage 0 --END

//add an admin page w the ability to update the name of the wine

////admin page ---END

/////////stage 1-8 --- on stage 1///////// ---START
////zoomed out view ---START
///copy/paste all these steps below for the next stage

//only shows the first wine and it's rank
//columns for: rank, wine #, wine name, and total score - ordered by total score, if there is a tie, wine # is next order
//view wine info by clicking on the wine's row - then it goes to zoomed in view

////zoomed out view ---END

////zoomed in view ---START
//shows the wine # and name at the top
//shows each user and their rank of the wine, ranked by highest to lowest
//each users row has: their name, rank, and notes

////verify that admin still works
//you can change the name of each wine
//you can submit to next stage, or change someones pw

////zoomed in view ---END

/////////stage 1-8 --- on stage 1///////// ---END

//////////////////css////////////////// ---END

//roll through very file and remove un-used code

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
