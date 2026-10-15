import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findWine } from "../../../store";
import Rank_Wine from "./Rank_Wine";
import "./Single_Wine_Rank.css";

const Single_Wine_Rank = () => {
  const { pathname } = useLocation();

  const wines = useSelector((state) => state.wines);
  const wine = findWine(wines, pathname);

  return (
    <div className="single-wine-page">
      <div className="single-wine-table">
        <Rank_Wine wine={wine} />
      </div>
    </div>
  );
};

export default Single_Wine_Rank;
