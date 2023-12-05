import classNames from "classnames";
import { FunctionComponent } from "react";

type Props = {
  variant?: "light" | "green";
};
export const TripleDots: FunctionComponent<Props> = ({ variant }) => {
  const bgVariant = variant === "light" ? "bg-zinc-300" : "bg-emerald-500";

  return (
    <div className="flex flex-row gap-1 justify-center">
      <div className={classNames("w-2 h-2  rounded-md", bgVariant)}></div>
      <div className={classNames("w-2 h-2  rounded-md", bgVariant)}></div>
      <div className={classNames("w-2 h-2  rounded-md", bgVariant)}></div>
    </div>
  );
};
