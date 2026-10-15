import IGO from "./IGO";
import NIGO from "./NIGO";

const Wine_Cont = ({ userScore, num }) => {
  const wineAnswer = userScore !== null ? <IGO /> : <NIGO />;

  return (
    <div className="wine-cont-admin">
      <div className="wine-num-admin white-text">Wine #{num}:</div>
      <div>{wineAnswer}</div>
    </div>
  );
};

export default Wine_Cont;
