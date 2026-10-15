import { cap1stLetter } from "../../store";
import Input_Cont from "./Input_Cont";

const Column_Cont = ({ column, rankInfo }) => {
  const header = column === "wineNum" ? "wine #" : column;

  rankInfo = rankInfo.map((wineRankInfo) => {
    return {
      id: wineRankInfo.id,
      result: wineRankInfo[column],
    };
  });

  return (
    <div className={`column-cont-results white-text cc-${column}-results`}>
      <h1>{cap1stLetter(header)}</h1>

      {rankInfo.map((wineResult, idx) => (
        <Input_Cont key={idx} column={column} wineResult={wineResult} />
      ))}
    </div>
  );
};

export default Column_Cont;
