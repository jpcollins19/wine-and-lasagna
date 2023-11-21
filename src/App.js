//get logged in

//write code to load the users with each wine being an object that has keys of: score, notes

////testing for calcing the total wine scores
//w no ties
//w ties

//admin for changing a pw

///////css//////// ---START
/////main page --START
//main page w all 8 wines where user can unlock their row that they want to edit - this then goes to the zoomed in page
//main page has the wine #
//main page as the rank you gave
//main page has the notes you made
//if you haven't ranked a wine yet, the top of the app has red text

/////main page --END

/////zoomed in page  --START
//has the option to update the dropdown score
//has the option to add notes on the wine
//save button "save and return to main menu"

/////zoomed in page  --END

///////css//////// ---END

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { loadUsers } from "./store";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
