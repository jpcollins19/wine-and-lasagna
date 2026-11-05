import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  convertNumToDropdownOption,
  updateUser,
  findJoe,
} from "../../../store";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../misc/Button";
import Cancel from "../../misc/Cancel";
import Dropdown from "../../misc/Dropdown";
import Error from "@mui/icons-material/ErrorOutline";

const Rank_Wine = ({ wine }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const wineNum = wine.number;

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const updatingWineScoreAllowed = wineNum >= joe.stage + 1;

  const [userWineRank, setUserWineRank] = useState(user[`score${wineNum}`]);
  const [userWineNotes, setUserWineNotes] = useState(user[`notes${wineNum}`]);

  const wineRank = convertNumToDropdownOption(userWineRank);

  const scoreOptions = [];

  for (let i = 0; i < 5.1; i += 0.5) {
    const option = convertNumToDropdownOption(i);
    scoreOptions.push(option);
  }

  const showError = (text) => {
    toast(
      <div>
        <Error color="red" fontSize="large" />
        <div className="invalid-credentials-text">{text}</div>
      </div>,
      {
        duration: 5000,
      }
    );
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      if (!userWineRank) {
        return showError("Error: must score wine before submitting");
      }

      const userObj = {
        id: user.id,
      };

      userObj[`score${wineNum}`] = userWineRank;
      userObj[`notes${wineNum}`] = userWineNotes;

      toast.dismiss();

      dispatch(updateUser(userObj, history));
    } catch (err) {
      console.log("reeeed error", err);
    }
  };

  return (
    <form onSubmit={onSubmit} id="submit-user-rank" className="rank-wine-table">
      <Toaster
        toastOptions={{
          className: "must-score-wine-text",
        }}
      />

      <h1 className="white-text">Wine #{wineNum}</h1>

      <div className="rank-wine-button">
        <Button text="Submit" form="submit-user-rank" />
      </div>

      <Cancel link="/rank_wines" color="white" />

      <h2 className="white-text">Score:</h2>

      {updatingWineScoreAllowed ? (
        <Dropdown
          options={scoreOptions}
          width="10"
          defaultValue={wineRank}
          set={(value) => setUserWineRank(value.value)}
        />
      ) : (
        <h2 className="white-text">{userWineRank}</h2>
      )}

      <textarea
        className="user-notes"
        placeholder="notes"
        defaultValue={userWineNotes}
        onChange={(ev) => setUserWineNotes(ev.target.value)}
      ></textarea>
    </form>
  );
};

export default Rank_Wine;
