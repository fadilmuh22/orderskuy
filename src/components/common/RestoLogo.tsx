import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type Props = {
  variant?: "white" | "green";
};

export const RestoLogo: FunctionComponent<Props> = ({ variant }) => {
  const color = variant === "white" ? "text-white" : "text-emerald-500";

  return (
    <div className="mr-1 cursor-pointer">
      <Link to="/">
        <h1 className={color}>
          <strong>Resto</strong>Order
        </h1>
      </Link>
    </div>
  );
};
