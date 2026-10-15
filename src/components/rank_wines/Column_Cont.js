import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWines } from "../../store";
import Input_Cont from "./Input_Cont";

const Column_Cont = ({ column }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWines());
  }, []);

  const wines = useSelector((state) => state.wines);

  const header = column === "wine" ? "wine #" : column;

  return (
    <div className={`column-cont white-text cc-${column}`}>
      <h1>{header}</h1>

      {wines.map((wine, idx) => (
        <Input_Cont key={idx} column={column} wine={wine} />
      ))}
    </div>
  );
};

export default Column_Cont;
