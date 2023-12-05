import { Food } from "@/api/types";
import { Button, Chip } from "@nextui-org/react";
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
        `bg-cover bg-center bg-[url('${food.image}')]`,
        "relative rounded-xl max-w-full min-h-[240px]",
        "pb-4"
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-orange-950 via-black/0 via-50% to-green-950"></div>

      <div className="absolute top-0 rounded-tl-xl flex flex-col rounded-tr-xl w-full">
        <div className="flex flex-row items-center justify-between px-4 py-2 border border-solid border-white/20 bg-black/20">
          <p className="text-white text-center font-bold">
            Rp {food.price.toLocaleString()}
          </p>
          <Chip className="bg-white/20 text-white font-bold">
            +{food.points} P
          </Chip>
        </div>
        <p className="pt-4 text-center text-white font-bold">{food.name}</p>
      </div>

      <div></div>
      <Button className="text-white" variant="bordered">
        Order
      </Button>
    </div>
  );
};
