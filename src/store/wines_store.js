import axios from "axios";

const LOAD_WINES = "LOAD_WINES";

const _loadWines = (wines) => {
  return { type: LOAD_WINES, wines };
};

export const loadWines = () => {
  return async (dispatch) => {
    let wines = (await axios.get("/api/wines")).data;

    wines = wines.sort((a, b) => a.number - b.number);

    dispatch(_loadWines(wines));
  };
};

export const updateWine = (wine, history) => {
  return async (dispatch) => {
    wine = (await axios.put(`/api/wines/${wine.id}`, wine)).data;

    history.push("/results");
  };
};

export const wines = (state = [], action) => {
  switch (action.type) {
    case LOAD_WINES:
      return action.wines;
    default:
      return state;
  }
};
