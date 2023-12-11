import { Product } from "@/api/products/types";
import { Button, Chip, Link } from "@nextui-org/react";
import classNames from "classnames";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

export const ProductCard: FunctionComponent<Props> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/products/" + product.id);
      }}
      className={classNames(
        "pb-4",
        "cursor-pointer",
        "flex flex-col items-center justify-between",
        "bg-cover bg-center",
        "relative rounded-xl max-w-full min-h-[240px]"
      )}
      style={{
        backgroundImage: `url('${product.image}')`,
      }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-orange-950 via-black/0 via-50% to-green-950"></div>

      <div className="absolute top-0 flex flex-col w-full rounded-tl-xl rounded-tr-xl">
        <div className="flex flex-row items-center justify-between px-4 py-2 border border-solid rounded-tl-xl rounded-tr-xl border-white/20 bg-black/20">
          <p className="text-xs font-bold text-white text-start">
            Rp {product.price.toLocaleString()}
          </p>
          <Chip className="font-bold text-white bg-white/20 text-[10px]">
            +{product.point} P
          </Chip>
        </div>
        <p className="pt-2 text-xs font-bold text-center text-white">
          {product.name}
        </p>
      </div>

      <div></div>
      <Button
        as={Link}
        href={"/products/" + product.id}
        className="text-white"
        variant="bordered"
      >
        Order
      </Button>
    </div>
  );
};
