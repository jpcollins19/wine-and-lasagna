import { Link } from "react-router-dom";
import Wine_Scores from "./Wine_Scores";
import User_Result_Table from "./User_Result_Table";

const Result_Wine = ({ wine }) => {
  return (
    <div className="single-wine-result-table white-text">
      <h1>{wine.name}</h1>

      <Wine_Scores wine={wine} />

      <Link to="/results">Go Back To Results</Link>

      <User_Result_Table wine={wine} />
    </div>
  );
};

export default Result_Wine;
