import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadWines, updateWine } from "../../../store";
import Wine_Cont_Z_Out from "./zoomed_out/Wine_Cont_Z_Out";
import Wine_Cont_Z_In from "./zoomed_in/Wine_Cont_Z_In";

const Admin_Wines = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [zoomedIn, setZoomedIn] = useState(false);
  const [selectedWine, setSelectedWine] = useState(null);

  useEffect(() => {
    dispatch(loadWines());
  }, []);

  const wines = useSelector((state) => state.wines);

  const onChange = (answer) => (selectedWine.name = answer);

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const wineObj = { id: selectedWine.id, name: selectedWine.name };

      dispatch(updateWine(wineObj, history));
    } catch (err) {
      console.log("reeeed error", err);
    }
  };

  return (
    <form id="admin-page-submit" onSubmit={onSubmit}>
      <div className="admin-page-wines">
        {!zoomedIn ? (
          wines.map((wine) => (
            <Wine_Cont_Z_Out
              key={wine.id}
              wine={wine}
              setZoomedIn={setZoomedIn}
              setSelectedWine={setSelectedWine}
            />
          ))
        ) : (
          <Wine_Cont_Z_In
            wine={selectedWine}
            setZoomedIn={setZoomedIn}
            onChange={onChange}
          />
        )}
      </div>
    </form>
  );
};

export default Admin_Wines;
