import { useRewardProducts } from "@/api/products";
import { RewardCard } from "./RewardCard";

export const RewardGrid = () => {
  const { data: rewards, isLoading } = useRewardProducts();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {rewards?.items.map((reward) => (
        <RewardCard key={reward.id} reward={reward} />
      ))}
    </div>
  );
};
