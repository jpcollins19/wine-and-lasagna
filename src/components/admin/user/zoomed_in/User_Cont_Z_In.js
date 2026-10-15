import Button from "../../../Misc/Button";
import Input_Cont from "../Input_Cont";
import Delete_User_Button from "./Delete_User_Button";

const User_Cont_Z_In = ({ user, setZoomedIn, onChange, deleteUserTools }) => {
  const inputs = ["email", "password", "stage"];

  const deleteUserNeeded = deleteUserTools.deleteUserNeeded;

  return (
    <div className="admin-user-cont-in">
      <div className="user-name-cont white-text"> {user.name}</div>

      {inputs.map((input) => (
        <Input_Cont key={input} user={user} input={input} onChange={onChange} />
      ))}

      <div className="admin-button">
        <Button text="Submit" form="admin-page-submit" />
      </div>

      <h1 className="white-text" onClick={() => setZoomedIn(false)}>
        cancel
      </h1>

      {!deleteUserNeeded && (
        <Delete_User_Button deleteUserTools={deleteUserTools} />
      )}

      {deleteUserNeeded && (
        <Delete_User_Button deleteUserTools={deleteUserTools} />
      )}
    </div>
  );
};

export default User_Cont_Z_In;
