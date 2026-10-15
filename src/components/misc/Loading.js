import { SpinnerDotted } from "spinners-react";

const Loading = () => {
  return (
    <div className="loading-cont">
      <SpinnerDotted size={200} thickness={100} speed={100} color="white" />
    </div>
  );
};

export default Loading;
