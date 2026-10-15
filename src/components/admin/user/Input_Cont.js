import { cap1stLetter } from "../../../store";

const Input_Cont = ({ user, input, onChange }) => {
  return (
    <div className="data-cont-admin-user dcau white-text">
      <div>{cap1stLetter(input)}:</div>
      <input
        className="dcau-input white-text"
        defaultValue={user && user[input]}
        onChange={(ev) => onChange(input, ev.target.value)}
      ></input>
    </div>
  );
};

export default Input_Cont;
