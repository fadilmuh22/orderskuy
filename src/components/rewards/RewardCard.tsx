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

type Props = {
  reward: Product;
};

export const RewardCard: FunctionComponent<Props> = ({ reward }) => {
  return (
    <Card>
      <CardBody className="gap-4 p-0 overflow-visible">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full object-cover h-[140px]"
          src={reward.image}
        />
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-bold text-zinc-500">Special Ice Tea</p>
          <div
            className={classNames("p-1 rounded-lg", {
              "bg-danger-50 text-danger-500": reward.point >= 100,
              "bg-success-50 text-success-500": reward.point >= 50,
            })}
          >
            {parseInt(reward.price).toLocaleString()} Points
          </div>
        </div>
        <div></div>
        <Divider />
      </CardBody>
      <CardFooter className="justify-center">
        <Button color="success" variant="shadow" className="text-sm text-white">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
