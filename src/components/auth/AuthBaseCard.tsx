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
      <div className="pt-2 px-6 pb-4 rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-white/40 to-transparent w-fit">
        <RestoLogo variant="light" />
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6">
        <h1 className="text-xl text-center text-emerald-500 font-bold">
          {title}
        </h1>
        <TripleDots variant="green" />
        {children}
      </div>
    </div>
  );
};
