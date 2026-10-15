import { findUserScores, userSubmittedAllScores } from "../../../../store";
import Wine_Cont from "./Wine_Cont";

const User_Cont_Z_Out = ({ user, setZoomedIn, setSelectedUser }) => {
  const userScores = findUserScores(user);
  const userClass = userSubmittedAllScores(user) ? "" : "not-submitted";

  return (
    <div
      className="admin-user-cont-out"
      onClick={() => {
        setZoomedIn(true);
        setSelectedUser(user);
      }}
    >
      <h1 className={`user-name-admin white-text ${userClass}`}>{user.name}</h1>
      <div className="wine-table-admin">
        {userScores.map((userScore, i) => (
          <Wine_Cont key={i} userScore={userScore} num={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default User_Cont_Z_Out;
