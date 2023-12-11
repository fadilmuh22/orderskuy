import { useTopProducts } from "@/api/products";
import { ProductGrid } from "./ProductGrid";

export const ProductTopGrid = () => {
  const { data: topProducts, isLoading } = useTopProducts();

  return (
    <ProductGrid
      products={topProducts?.items ?? []}
      categoryLabel="Top Seller"
      isLoading={isLoading}
    />
  );
};
