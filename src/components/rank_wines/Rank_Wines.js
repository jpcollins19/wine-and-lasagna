import Column_Cont from "./Column_Cont";
import "./Rank_Wines.css";

const Rank_Wines = () => {
  const columns = ["wine", "score", "notes"];

  return (
    <div className="rank-wines-page">
      <div className="rank-wines-table">
        {columns.map((column, idx) => (
          <Column_Cont key={idx} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Rank_Wines;
