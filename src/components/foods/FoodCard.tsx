import { Food } from "@/api/types";
import { Button, Chip, Link } from "@nextui-org/react";
import classNames from "classnames";
import { FunctionComponent } from "react";

type Props = {
  food: Food;
};

export const FoodCard: FunctionComponent<Props> = ({ food }) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-between",
        "bg-cover bg-center",
        "relative rounded-xl max-w-full min-h-[240px]",
        "pb-4"
      )}
      style={{
        backgroundImage: `url('${food.image}')`,
      }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-orange-950 via-black/0 via-50% to-green-950"></div>

      <div className="absolute top-0 flex flex-col w-full rounded-tl-xl rounded-tr-xl">
        <div className="flex flex-row items-center justify-between px-4 py-2 border border-solid rounded-tl-xl rounded-tr-xl border-white/20 bg-black/20">
          <p className="font-bold text-center text-white">
            Rp {food.price.toLocaleString()}
          </p>
          <Chip className="font-bold text-white bg-white/20">
            +{food.points} P
          </Chip>
        </div>
        <p className="pt-4 font-bold text-center text-white">{food.name}</p>
      </div>

      <div></div>
      <Button
        as={Link}
        href={"/foods/" + food.id}
        className="text-white"
        variant="bordered"
      >
        Order
      </Button>
    </div>
  );
};
