import { FunctionComponent } from "react";
import { RestoLogo } from "../common/RestoLogo";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const AuthBaseCard: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div>
      <div className="pt-2 px-6 pb-4 rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-white/40 to-transparent w-fit">
        <RestoLogo variant="white" />
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6">
        <h1 className="text-xl text-center text-emerald-500 font-bold">
          {title}
        </h1>
        <div className="flex flex-row gap-1 justify-center">
          <div className="w-2 h-2 bg-emerald-300 rounded-md"></div>
          <div className="w-2 h-2 bg-emerald-300 rounded-md"></div>
          <div className="w-2 h-2 bg-emerald-300 rounded-md"></div>
        </div>

        {children}
      </div>
    </div>
  );
};
