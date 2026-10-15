import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { me, trimNotes } from "../../store";

const Input_Cont = ({ column, wine }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  const wineNum = wine?.number;

  const user = useSelector((state) => state.auth);
  const userAnswer = user[`${column}${wineNum}`];

  let value;

  let classInfo = "white-text";

  switch (column) {
    case "wine":
      value = wineNum;
      break;
    case "score":
      if (userAnswer !== null) {
        value = userAnswer;
      } else {
        value = "TBD";
        classInfo = "missing-score";
      }
      break;
    case "notes":
      let notes = "-----";

      if (userAnswer) {
        if (userAnswer.length <= 90) {
          notes = userAnswer;
        } else {
          notes = trimNotes(userAnswer);
          notes += "....    click to view full text";
        }
      }

      value = notes;
      break;
  }

  return (
    <Link to={`/rank/${wine.id}`} className={`input-cont ${classInfo}`}>
      {value}
    </Link>
  );
};

export default Input_Cont;
