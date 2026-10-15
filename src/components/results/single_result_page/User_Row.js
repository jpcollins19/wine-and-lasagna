const User_Row = ({ user }) => {
  const answers = ["name", "score", "notes"];

  return (
    <div className="user-result-row">
      {answers.map((answer, idx) => {
        const answerClass = answer === "notes" ? "big" : "sm";

        return (
          <div key={idx} className={`user-result-${answerClass}`}>
            {user[answer]}
          </div>
        );
      })}
    </div>
  );
};

export default User_Row;
