import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FunctionComponent = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-emerald-300 to-emerald-500 px-4 py-12">
      <Outlet />
    </div>
  );
};
