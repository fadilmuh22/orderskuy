import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FunctionComponent = () => {
  return (
    <div className="flex flex-col px-4 py-12 bg-gradient-to-r from-emerald-300 to-emerald-500 min-h-[100dvh] w-full">
      <Outlet />
    </div>
  );
};
