import { useLocation } from "react-router-dom";
import Admin_User from "./user/Admin_User";
import Admin_Wines from "./wines/Admin_Wines";
import "./Admin.css";

const Admin = () => {
  const { pathname } = useLocation();

  const path = pathname.split("/")[2];

  return path === "users" ? <Admin_User /> : <Admin_Wines />;
};

export default Admin;
