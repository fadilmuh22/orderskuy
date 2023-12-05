import { Divider } from "@nextui-org/react";
import { FunctionComponent } from "react";

export const AuthOptionalDivider: FunctionComponent<{ text: string }> = ({
  text,
}) => {
  return (
    <div className="flex flex-row justify-evenly items-center gap-2 overflow-hidden w-full">
      <Divider />
      <div className="min-w-fit">
        <p>{text}</p>
      </div>
      <Divider />
    </div>
  );
};
