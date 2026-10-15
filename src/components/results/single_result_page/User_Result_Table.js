import User_Row from "./User_Row";

const User_Result_Table = ({ wine }) => {
  return (
    <div className="user-result-table">
      {wine.userNotes.map((user, idx) => (
        <User_Row key={idx} user={user} />
      ))}
    </div>
  );
};

export default User_Result_Table;
