import { Food } from "@/api/types";
import { FunctionComponent } from "react";
import { FoodCard } from "./FoodCard";
import { DividerWithChild } from "../common/DividerWithChild";
import { TripleDots } from "../common/TripleDots";

type Props = {
  foods: Food[];
  categoryLabel: string;
};

export const FoodGrid: FunctionComponent<Props> = ({
  foods,
  categoryLabel,
}) => {
  return (
    <div className="flex flex-col justify-center gap-6">
      <DividerWithChild>
        <TripleDots variant="light" />
      </DividerWithChild>

      <h1 className="text-2xl font-bold text-center text-zinc-500">
        {categoryLabel}
      </h1>
      <div className="grid grid-cols-2 gap-3">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};
