import { IconProvider } from "@/components/common/IconProvider";
import { Button, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { FoodCategoriesGrid } from "@/components/products/ProductCategoriesGrid";
import { SectionHeader } from "@/components/common/SectionHeader";
import { DropdownCategory } from "@/components/products/DropdownCategory";
import { ChangeEvent, useState } from "react";
import { useDebounce } from "usehooks-ts";

export const ProductsPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const debouncedValue = useDebounce<string>(searchText, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>();

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
            value={searchText}
            onChange={handleChange}
          />
          <Button
            onClick={() => setSearchText(searchText)}
            isIconOnly
            variant="bordered"
          >
            <IconProvider size="30">
              <FaSearch />
            </IconProvider>
          </Button>
        </div>

        <DropdownCategory
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        />
      </div>

      <FoodCategoriesGrid
        search={debouncedValue}
        selectedCategories={selectedKeys ? Array.from(selectedKeys) : undefined}
      />
    </div>
  );
};
