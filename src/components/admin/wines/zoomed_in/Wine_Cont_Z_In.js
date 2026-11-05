import Button from "../../../misc/Button";

const Wine_Cont_Z_In = ({ wine, setZoomedIn, onChange }) => {
  return (
    <div className="admin-wine-cont-in">
      <div className="wine-num-cont white-text">Wine #{wine.number}</div>

      <div className="data-cont-admin-wine white-text">
        <div>Name:</div>
        <input
          className="dcau-input white-text"
          defaultValue={wine && wine.name}
          onChange={(ev) => onChange(ev.target.value)}
        ></input>
      </div>

      <div className="admin-button">
        <Button text="Submit" form="admin-page-submit" />
      </div>

      <h1 className="white-text" onClick={() => setZoomedIn(false)}>
        cancel
      </h1>
    </div>
  );
};

export default Wine_Cont_Z_In;
