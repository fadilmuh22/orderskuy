import { FunctionComponent } from "react";
import { ProductCard } from "./ProductCard";
import { DividerWithChild } from "../common/DividerWithChild";
import { TripleDots } from "../common/TripleDots";
import { Product } from "@/api/products/types";
import { SectionHeader } from "../common/SectionHeader";

type Props = {
  products: Product[];
  categoryLabel: string;
  isLoading: boolean;
};

export const ProductGrid: FunctionComponent<Props> = ({
  products,
  categoryLabel,
  isLoading,
}) => {
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col justify-center gap-6">
      <DividerWithChild>
        <TripleDots variant="light" />
      </DividerWithChild>

      <SectionHeader title={categoryLabel} />

      <div className="grid grid-cols-2 gap-3">
        {products.map((food) => (
          <ProductCard key={food.id} product={food} />
        ))}
      </div>
    </div>
  );
};
