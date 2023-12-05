import { FunctionComponent } from "react";
import { RestoLogo } from "../common/RestoLogo";
import { TripleDots } from "../common/TripleDots";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const AuthBaseCard: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div>
      <div className="px-6 pt-2 pb-4 rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-white/40 to-transparent w-fit">
        <RestoLogo variant="light" />
      </div>
      <div className="flex flex-col gap-6 p-6 bg-white rounded-xl">
        <h1 className="text-xl font-bold text-center text-emerald-500">
          {title}
        </h1>
        <TripleDots variant="green" />
        {children}
      </div>
    </div>
  );
};
