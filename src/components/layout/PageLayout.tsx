import { FunctionComponent, PropsWithChildren } from "react";
import { Navbar } from "../Navigation/Navbar";
import { Copyright } from "../common/Copyright";

export const PageLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
      <Copyright />
    </>
  );
};
