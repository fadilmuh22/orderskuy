import { Divider } from "@nextui-org/react";
import { FunctionComponent, PropsWithChildren } from "react";

export const DividerWithChild: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-2 overflow-hidden justify-evenly">
      <Divider />
      <div className="min-w-fit">{children}</div>
      <Divider />
    </div>
  );
};
