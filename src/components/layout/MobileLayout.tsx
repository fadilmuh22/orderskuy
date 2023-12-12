import { FunctionComponent, PropsWithChildren } from "react";

export const MobileLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="w-full h-100[vh] flex flex-col justify-center items-center light:bg-emerald-50 dark:bg-zinc-700">
      <div className="min-h-[100dvh] w-full md:max-w-[414px] bg-white shadow-lg rounded-lg">
        {children}
      </div>
    </div>
  );
};
