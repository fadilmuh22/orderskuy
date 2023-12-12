import { useTopProducts } from "@/api/products";
import { ProductGrid } from "./ProductGrid";
import { ProductGridPlaceHolder } from "./ProductGridPlaceHolder";

export const ProductTopGrid = () => {
  const { data: topProducts, isLoading } = useTopProducts();

  return (
    <>
      <ProductGrid
        products={topProducts?.items ?? []}
        categoryLabel="Top Seller"
        isLoading={isLoading}
      />
      <ProductGridPlaceHolder
        isLoading={isLoading}
        isEmpty={topProducts?.total_items === 0}
        emptyMessage="No products found."
      />
    </>
  );
};
