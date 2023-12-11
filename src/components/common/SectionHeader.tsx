import { FunctionComponent } from "react";
type Props = {
  title: string;
  subtitle?: string;
};

export const SectionHeader: FunctionComponent<Props> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 text-zinc-500">
      <h1 className="text-2xl">{title}</h1>
      {subtitle && <p className="text-xs font-bold">{subtitle}</p>}
    </div>
  );
};
