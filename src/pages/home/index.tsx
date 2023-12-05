import { friedRice } from "@/api/types";
import { Banner } from "@/components/common/Banner";
import { DividerWithChild } from "@/components/common/DividerWithChild";
import { FoodCard } from "@/components/common/FoodCard";
import { TripleDots } from "@/components/common/TripleDots";

export const HomePage = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <Banner />

      <div className="flex flex-col items-center gap-2 text-zinc-500">
        <h1 className="text-2xl">Satisfy your Cravings</h1>
        <p className="text-xs font-bold">with a few clicks!</p>
      </div>

      <DividerWithChild>
        <TripleDots variant="light" />
      </DividerWithChild>

      <div className="flex flex-col gap-6 justify-center">
        <h1 className="text-2xl font-bold text-zinc-500 text-center">
          Top Seller
        </h1>
        <div className="grid grid-cols-2 gap-3">
          {Array(10)
            .fill(friedRice)
            .map((food, index) => (
              <FoodCard key={index} food={food} />
            ))}
        </div>
      </div>
    </div>
  );
};
