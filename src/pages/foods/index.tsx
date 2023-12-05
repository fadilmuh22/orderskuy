import { friedRice } from "@/api/types";
import { DividerWithChild } from "@/components/common/DividerWithChild";
import { FoodCard } from "@/components/common/FoodCard";
import { IconProvider } from "@/components/common/IconProvider";
import { TripleDots } from "@/components/common/TripleDots";
import { Button, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

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

      <DividerWithChild>
        <TripleDots variant="light" />
      </DividerWithChild>

      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-2xl font-bold text-center text-zinc-500">
          Nasi Goreng
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
