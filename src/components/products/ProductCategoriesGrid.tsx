import { FunctionComponent } from "react";
import { ProductGrid } from "./ProductGrid";
import { Category } from "@/api/products/types";
import { useCategoryProducts } from "@/api/products";

type Props = {
  selectedCategories?: Category[];
};

export const FoodCategoriesGrid: FunctionComponent<Props> = ({
  selectedCategories,
}) => {
  const { data: categoryProducts, isLoading } = useCategoryProducts(undefined, {
    with_products: true,
  });

  if (selectedCategories?.length === 0) {
    return categoryProducts?.items.map((category, index) => (
      <ProductGrid
        key={index}
        products={category.products ?? []}
        categoryLabel={category.name}
        isLoading={isLoading}
      />
    ));
  }

  return categoryProducts?.items
    ?.filter(
      (category) => !selectedCategories?.find((c) => c.id === category.id)
    )
    .map((category, index) => (
      <ProductGrid
        key={index}
        products={category.products ?? []}
        categoryLabel={category.name}
        isLoading={isLoading}
      />
    ));
};
