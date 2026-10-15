import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadUsers, deleteUser, updateUser } from "../../../store";
import User_Cont_Z_Out from "./zoomed_out/User_Cont_Z_Out";
import User_Cont_Z_In from "./zoomed_in/User_Cont_Z_In";

const Admin_User = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [zoomedIn, setZoomedIn] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [deleteUserNeeded, setDeleteUserNeeded] = useState(false);
  const [deleteUserConfirmed, setDeleteUserConfirmed] = useState(false);

  const deleteUserTools = {
    deleteUserNeeded: deleteUserNeeded,
    setDeleteUserNeeded: setDeleteUserNeeded,
    setDeleteUserConfirmed: setDeleteUserConfirmed,
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const users = useSelector((state) => state.users);

  const onChange = (input, answer) => (selectedUser[input] = answer);

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const userObj = {
        id: selectedUser.id,
        email: selectedUser.email,
        password: selectedUser.password,
        stage: selectedUser.stage,
      };

      if (deleteUserConfirmed) {
        return dispatch(deleteUser(userObj, history));
      }

      dispatch(updateUser(userObj, history, true));
    } catch (err) {
      console.log("reeeed error", err);
    }
  };

  return (
    <form id="admin-page-submit" onSubmit={onSubmit}>
      <div className="admin-page-users">
        {!zoomedIn ? (
          users.map((user) => (
            <User_Cont_Z_Out
              key={user.id}
              user={user}
              setZoomedIn={setZoomedIn}
              setSelectedUser={setSelectedUser}
            />
          ))
        ) : (
          <User_Cont_Z_In
            user={selectedUser}
            setZoomedIn={setZoomedIn}
            onChange={onChange}
            deleteUserTools={deleteUserTools}
          />
        )}
      </div>
    </form>
  );
};

export default Admin_User;
