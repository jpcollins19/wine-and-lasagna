//////////////////css////////////////// ---START

/////////stage 0///////// ---START

////zoomed in view ---START
////zoomed in view - when there are full picks ---START
//rows for: wine #, score, and notes
//on the point of adjusting/saving the wineRank in the dropdown
//save button at top
//cancel button at top

//note section can be edited

////zoomed in view - when there are full picks ---END

////zoomed out view - when there are half incomplete picks ---START
//everything works
//nav back and forth from the zoomed out to zoomed in view

////zoomed out view - when there are half incomplete picks ---END

////zoomed out view - when there are no picks ---START
//everything works
//nav back and forth from the zoomed out to zoomed in view

////zoomed out view - when there are no picks ---END

/////////stage 0///////// ---END

/////////stage 1-8 --- on stage 1///////// ---START
////zoomed out view ---START
//only shows the first wine and it's rank
//columns for: rank, wine #, wine name, and total score - ordered by total score, if there is a tie, wine # is next order
//view wine info by clicking on the wine's row - then it goes to zoomed in view

////zoomed out view ---END

////zoomed in view ---START
//shows the wine # and name at the top
//shows each user and their rank of the wine, ranked by highest to lowest
//each users row has: their name, rank, and notes

////zoomed in view ---END

/////////stage 1-8 --- on stage 1///////// ---END

////admin page ---START
//shows each user and a red box/red x for each wine that they haven't submitted
//can click on a user to edit their email/pw

//ability to delete a user

//ability to update the name of the wine

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
