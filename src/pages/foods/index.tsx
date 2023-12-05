import { IconProvider } from "@/components/common/IconProvider";
import { Button, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { FoodCategoriesGrid } from "@/components/foods/FoodCategoriesGrid";
import { mockFoods } from "@/api/types";

export const FoodsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-col items-center gap-2 text-zinc-500">
        <h1 className="text-2xl">Available</h1>
        <p className="text-xs font-bold">Menu</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <Input
            placeholder="Search your food..."
            classNames={{
              inputWrapper: "h-10",
            }}
          />
          <Button isIconOnly variant="bordered">
            <IconProvider size="30">
              <FaSearch />
            </IconProvider>
          </Button>
        </div>
        <Button color="success" variant="solid">
          Category
        </Button>
      </div>

      <FoodCategoriesGrid foods={mockFoods} categories={[]} />
    </div>
  );
};
