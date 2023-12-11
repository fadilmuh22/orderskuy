import { IconProvider } from "@/components/common/IconProvider";
import { Button, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { FoodCategoriesGrid } from "@/components/products/ProductCategoriesGrid";
import { SectionHeader } from "@/components/common/SectionHeader";

export const ProductsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <SectionHeader title="Available" subtitle="Menu" />

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

      <FoodCategoriesGrid selectedCategories={[]} />
    </div>
  );
};
