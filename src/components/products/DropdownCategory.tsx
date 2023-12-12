import { useCategoryProducts } from "@/api/products";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  CircularProgress,
} from "@nextui-org/react";
import { FunctionComponent, useMemo } from "react";

type Props = {
  selectedKeys: Set<string> | undefined;
  onSelectionChange: (keys: Set<string>) => void;
};

export const DropdownCategory: FunctionComponent<Props> = ({
  selectedKeys,
  onSelectionChange,
}) => {
  const { data: categories, isLoading } = useCategoryProducts(undefined, {
    with_products: false,
  });

  const selectedValue = useMemo(() => {
    if (!(selectedKeys && categories)) return;
    return categories?.items.find(
      (c) => c.id === +selectedKeys.values().next().value
    )?.name;
  }, [categories, selectedKeys]);

  const categoryMenuItems = useMemo(() => {
    if (isLoading) {
      return (
        <DropdownItem key="loading">
          <CircularProgress />
        </DropdownItem>
      );
    }
    if (!categories) return <DropdownItem key="no-category"></DropdownItem>;
    return [
      <DropdownItem key="all">All Category</DropdownItem>,
      ...(categories?.items.map((category) => (
        <DropdownItem key={category.id}>{category.name}</DropdownItem>
      )) ?? []),
    ];
  }, [categories, isLoading]);
  return (
    <Dropdown className="min-w-[90dvw]">
      <DropdownTrigger>
        <Button color="success" variant="solid" className="text-white">
          {selectedValue ?? "Category"}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Select Category"
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => {
          const keyString = (keys as Set<string>).values().next().value;
          if (keyString === "all") {
            onSelectionChange(new Set());
            return;
          }
          onSelectionChange(keys as Set<string>);
        }}
        disabledKeys={["loading, no-category"]}
      >
        {categoryMenuItems}
      </DropdownMenu>
    </Dropdown>
  );
};
