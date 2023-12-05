import { mockFoods } from "@/api/types";
import { Banner } from "@/components/common/Banner";
import { FoodCategoriesGrid } from "@/components/foods/FoodCategoriesGrid";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <Banner />

      <div className="flex flex-col items-center gap-2 text-zinc-500">
        <h1 className="text-2xl">Satisfy your Cravings</h1>
        <p className="text-xs font-bold">with a few clicks!</p>
      </div>

      <div className="flex flex-col justify-center gap-6">
        <FoodCategoriesGrid foods={mockFoods} popular />
      </div>
    </div>
  );
};
