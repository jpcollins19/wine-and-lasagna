import { Link } from "react-router-dom";
import "./UserAccount.css";

const Action_Confirmation = () => {
  return (
    <div className="action-confirm-page white-text">
      <h1>Account Succesfully Created!</h1>

      <div className="click-to-sign-in">
        <Link to="/sign_in">Click here to sign in</Link>
      </div>
    </div>
  );
};

export default Action_Confirmation;
