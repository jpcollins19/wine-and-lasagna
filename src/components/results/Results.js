import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUsers,
  loadWines,
  findJoe,
  getCurrentWineRankData,
} from "../../store";
import Column_Cont from "./Column_Cont";
import "./Results.css";

const Results = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadWines());
  }, []);

  const users = useSelector((state) => state.users);
  const wines = useSelector((state) => state.wines);

  const joe = findJoe(useSelector((state) => state.users));

  const rankInfo = getCurrentWineRankData(users, wines, joe);

  const columns = ["rank", "wineNum", "name", "score", "ave"];

  return (
    <div className="results-page">
      <div className="results-table">
        {columns.map((column, idx) => {
          return <Column_Cont key={idx} column={column} rankInfo={rankInfo} />;
        })}
      </div>
    </div>
  );
};

export default Results;
