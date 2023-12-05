import { FunctionComponent } from "react";
import { IconContext } from "react-icons";

type Props = IconContext & {
  children: React.ReactNode;
};

export const IconProvider: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return <IconContext.Provider value={props}>{children}</IconContext.Provider>;
};
