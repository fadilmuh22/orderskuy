import { FunctionComponent, useEffect } from "react";
import { ProductGrid } from "./ProductGrid";
import { useCategoryProducts } from "@/api/products";
import { ProductGridPlaceHolder } from "./ProductGridPlaceHolder";

type Props = {
  search?: string;
  selectedCategories?: string[];
};

export const FoodCategoriesGrid: FunctionComponent<Props> = ({
  search,
  selectedCategories,
}) => {
  const {
    data: categoryProducts,
    isLoading,
    setParams,
  } = useCategoryProducts(undefined, {
    with_products: true,
  });

  useEffect(() => {
    setParams({ id: selectedCategories?.join(","), search });
  }, [search, selectedCategories, setParams]);

  return (
    <>
      {categoryProducts?.items.map((category) => (
        <ProductGrid
          key={category.id}
          products={category.products ?? []}
          categoryLabel={category.name}
          isLoading={isLoading}
        />
      ))}
      <ProductGridPlaceHolder
        isLoading={isLoading}
        isEmpty={categoryProducts?.total_items === 0}
        emptyMessage="No products found."
      />
    </>
  );
};
