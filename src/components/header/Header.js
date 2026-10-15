import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { me, findWine, cap1stLetter, findJoe } from "../../store";
import CssBaseline from "@mui/material/CssBaseline";
import Menu_Chevron from "./Menu_Chevron";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(me());
  }, []);

  const currentPage = cap1stLetter(pathname.split("/")[1]);

  const user = useSelector((state) => state.auth);
  const wines = useSelector((state) => state.wines);

  let verbiageNeeded = "";

  const wine = findWine(wines, pathname);
  const joe = findJoe(useSelector((state) => state.users));

  if (user?.id) {
    switch (currentPage) {
      case "Rank":
        verbiageNeeded = `${currentPage} Wine #${wine?.number}`;
        break;
      case "Admin":
        const page = cap1stLetter(pathname.split("/")[2]);

        verbiageNeeded = `${currentPage} - ${page}`;
        break;
      case "Results":
        if (wine) {
          verbiageNeeded = `${currentPage} - Wine #${wine?.number}`;
        } else {
          verbiageNeeded = currentPage;
        }
        break;
      default:
        verbiageNeeded = currentPage;
    }
  }
  return (
    <div className="navbar-cont">
      <Link to={`/${joe?.stage === 0 ? "rank_wines" : "results"}`}>
        <CssBaseline />
        Fancy Wine & Lasagna
      </Link>

      <div className={`url-mobile${verbiageNeeded !== "" ? "-selected" : ""}`}>
        {verbiageNeeded}
      </div>

      <Menu_Chevron />
    </div>
  );
};

export default Header;
