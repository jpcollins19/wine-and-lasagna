import { Link } from "react-router-dom";

const Input_Cont = ({ wineResult }) => {
  return <Link to={`/results/${wineResult.id}`}>{wineResult.result} </Link>;
};

export default Input_Cont;
