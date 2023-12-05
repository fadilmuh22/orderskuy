import { Divider } from "@nextui-org/react";
import { FunctionComponent, PropsWithChildren } from "react";

export const DividerWithChild: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="flex flex-row justify-evenly items-center gap-2 overflow-hidden w-full">
      <Divider />
      <div className="min-w-fit">{children}</div>
      <Divider />
    </div>
  );
};
