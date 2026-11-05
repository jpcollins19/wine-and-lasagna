import Button from "../../../misc/Button";

const Delete_User_Button = ({ deleteUserTools }) => {
  const deleteUserNeeded = deleteUserTools.deleteUserNeeded;

  const text = deleteUserNeeded ? "Confirm & Delete User" : "Delete User";
  const form = deleteUserNeeded ? "admin-page-submit" : "";

  return (
    <div className="admin-button-delete">
      <Button
        text={text}
        form={form}
        onClick={
          deleteUserNeeded
            ? () => deleteUserTools.setDeleteUserConfirmed(true)
            : () => deleteUserTools.setDeleteUserNeeded(true)
        }
      />
    </div>
  );
};

export default Delete_User_Button;
