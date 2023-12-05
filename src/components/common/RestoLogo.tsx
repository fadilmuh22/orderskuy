import { Link } from "@nextui-org/react";
import { FunctionComponent } from "react";

type Props = {
  variant?: "light" | "green";
};

export const RestoLogo: FunctionComponent<Props> = ({ variant }) => {
  const color = variant === "light" ? "text-white" : "text-emerald-500";

  return (
    <div className="mr-1 cursor-pointer">
      <Link href="/">
        <h1 className={color}>
          <strong>Resto</strong>Order
        </h1>
      </Link>
    </div>
  );
};
