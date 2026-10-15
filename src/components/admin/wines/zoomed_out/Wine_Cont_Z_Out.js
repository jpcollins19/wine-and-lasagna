const Wine_Cont_Z_Out = ({ wine, setZoomedIn, setSelectedWine }) => {
  return (
    <div
      className="admin-wine-cont-out white-text"
      onClick={() => {
        setZoomedIn(true);
        setSelectedWine(wine);
      }}
    >
      <div>Wine #{wine.number}</div>
      {wine.name && <div>{wine.name}</div>}
    </div>
  );
};

export default Wine_Cont_Z_Out;
