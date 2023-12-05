import { Navbar } from "../Navigation/Navbar";
import { Copyright } from "../common/Copyright";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Copyright />
    </div>
  );
};
