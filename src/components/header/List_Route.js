import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { formatURL, logout } from "../../store";

const List_Route = ({ route, closeMobileMenu, userRoute }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  let path = route === "Sign Out" ? "sign_in" : formatURL(route);

  if (path === "admin") {
    path = userRoute ? "admin/users" : "admin/wines";
    route = userRoute ? "Admin - Users" : "Admin - Wines";
  }

  return (
    <li>
      <Link
        to={`/${path}`}
        className="dropdown-route-row"
        onClick={() => {
          route === "Sign Out" ? dispatch(logout(history)) : closeMobileMenu();

          closeMobileMenu();
        }}
      >
        {route}
      </Link>
    </li>
  );
};

export default List_Route;
