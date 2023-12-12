import { useRewardProducts } from "@/api/products";
import { RewardCard } from "./RewardCard";
import { ProductGridPlaceHolder } from "../products/ProductGridPlaceHolder";

export const RewardGrid = () => {
  const { data: rewards, isLoading } = useRewardProducts();

  return (
    <>
      <ProductGridPlaceHolder
        isLoading={isLoading}
        isEmpty={rewards?.total_items === 0}
        emptyMessage="No reward products found."
      />
      <div className="grid grid-cols-2 gap-3">
        {rewards?.items.map((reward) => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </>
  );
};
