import { Category, Food, mockCategories } from "@/api/types";
import { FunctionComponent } from "react";
import { FoodGrid } from "./FoodGrid";

type Props = {
  foods: Food[];
  categories?: Category[];
  popular?: boolean;
};

export const FoodCategoriesGrid: FunctionComponent<Props> = ({
  foods,
  categories,
  popular,
}) => {
  const allCategories = mockCategories;

  if (popular) {
    return <FoodGrid foods={foods} categoryLabel="Top Seller" />;
  }

  if (categories?.length === 0) {
    return allCategories.map((category, index) => (
      <FoodGrid
        key={index}
        foods={foods.filter((food) => food.categoryId === category.id)}
        categoryLabel={category.categoryLabel}
      />
    ));
  }

  return categories?.map((category, index) => (
    <FoodGrid
      key={index}
      foods={foods.filter((food) => food.categoryId === category.id)}
      categoryLabel={category.categoryLabel}
    />
  ));
};
