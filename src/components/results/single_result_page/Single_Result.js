import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  loadUsers,
  loadWines,
  findWine,
  findJoe,
  getCurrentWineRankData,
} from "../../../store";
import Result_Wine from "./Result_Wine";
import "./Single_Result.css";

const Single_Result = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadWines());
  }, []);

  const users = useSelector((state) => state.users);
  const wines = useSelector((state) => state.wines);
  const selectedWine = findWine(wines, pathname);

  const joe = findJoe(useSelector((state) => state.users));

  const rankInfo = getCurrentWineRankData(users, wines, joe);

  const wine = rankInfo.find((wineRank) => wineRank.id === selectedWine.id);

  return (
    <div className="single-wine-result-page">
      <Result_Wine wine={wine} />
    </div>
  );
};

export default Single_Result;
