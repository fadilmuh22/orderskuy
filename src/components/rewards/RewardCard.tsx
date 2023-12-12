import { useProductToCart } from "@/api/products";
import { Product } from "@/api/products/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import classNames from "classnames";
import { FunctionComponent } from "react";
import { toast } from "react-toastify";

type Props = {
  reward: Product;
};

export const RewardCard: FunctionComponent<Props> = ({ reward }) => {
  const { mutateAsync: addToCart, isPending: isAddToCartPending } =
    useProductToCart({
      onSuccess: () => {
        toast.success("Reward added to cart successfully");
      },
      onError: (error) => {
        toast.error(error.error_message);
      },
    });

  return (
    <Card>
      <CardBody className="gap-4 p-0 overflow-visible">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className={classNames("w-full object-cover h-[140px]", {
            grayscale: reward?.stock === 0,
            "hover:grayscale-0": true,
          })}
          src={reward.image}
        />
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-bold text-zinc-500">Special Ice Tea</p>
          <div
            className={classNames("p-1 rounded-lg", {
              "bg-danger-50 text-danger-500": +reward.price >= 30000,
              "bg-success-50 text-success-500": +reward.price < 30000,
              "bg-warning-50 text-warning-500": +reward.price < 10000,
            })}
          >
            {parseInt(reward.price).toLocaleString()} Points
          </div>
        </div>
        <div></div>
        <Divider />
      </CardBody>
      <CardFooter className="justify-center">
        <Button
          onClick={async () => {
            await addToCart({ product_id: reward.id, qty: 1, notes: "" });
          }}
          isLoading={isAddToCartPending}
          isDisabled={reward.stock === 0}
          color="success"
          variant="shadow"
          className="text-sm text-white"
        >
          {reward.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};
