import { cap1stLetter } from "../../../store";

const Wine_Scores = ({ wine }) => {
  const options = ["score", "ave"];

  return (
    <div className="wine-result-scores-table">
      {options.map((option, idx) => (
        <div key={idx}>
          <div className="key">{cap1stLetter(option)}:</div>
          <div>{wine[option]}</div>
        </div>
      ))}
    </div>
  );
};

export default Wine_Scores;
