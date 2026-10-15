import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MenuItemIcon from "@mui/icons-material/List";
import { findJoe } from "../../store";
import List_Route from "./List_Route";

const Navbar_Routes_M = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      !ref.current.contains(event.target) &&
        event.target.className !== "dropdown-route-row" &&
        closeMobileMenu();
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [click]);

  const user = useSelector((state) => state.auth);

  const userRoutes = ["Rank Wines"];

  const joe = findJoe(useSelector((state) => state.users));

  joe?.stage > 0 && userRoutes.push("Results");

  return (
    <div>
      <div className="menu-icon" onClick={handleClick} ref={ref}>
        <MenuItemIcon sx={{ fontSize: 90, color: "purple" }} />
      </div>
      {click && (
        <ul className={click ? "dropdown-menu active" : "dropdown-menu"}>
          {user?.isAdmin && (
            <List_Route
              route="Admin"
              closeMobileMenu={closeMobileMenu}
              user={user}
              userRoute={true}
            />
          )}

          {user?.isAdmin && (
            <List_Route
              route="Admin"
              closeMobileMenu={closeMobileMenu}
              user={user}
              userRoute={false}
            />
          )}

          {user?.id &&
            userRoutes.map((route, idx) => (
              <List_Route
                key={idx}
                route={route}
                closeMobileMenu={closeMobileMenu}
                user={user}
              />
            ))}

          <List_Route
            route={user?.id ? "Sign Out" : "Sign In"}
            closeMobileMenu={closeMobileMenu}
            user={user}
          />
        </ul>
      )}
    </div>
  );
};

export default Navbar_Routes_M;
