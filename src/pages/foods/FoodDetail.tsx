import { mockFoods } from "@/api/types";
import { IconProvider } from "@/components/common/IconProvider";
import { Button, Image, Input, Link } from "@nextui-org/react";
import { FaChevronLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const FoodDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();

  const food = mockFoods.find((food) => food.id === parseInt(id));

  return (
    <div className="flex flex-col gap-6 p-4" key={id}>
      <div className="flex flex-row">
        <Button
          as={Link}
          href=".."
          color="danger"
          variant="flat"
          startContent={
            <IconProvider className="fill-danger-500">
              <FaChevronLeft />
            </IconProvider>
          }
        >
          Back
        </Button>
      </div>

      <div className="flex flex-col items-center gap-2 text-zinc-500">
        <h1 className="text-2xl">Food</h1>
        <p className="text-xs font-bold">Detail</p>
      </div>

      <Image src={food?.image} width="100%" height="240" />

      <div className="flex flex-col gap-2">
        <p>Name: {food?.name}</p>
        <p>Price: Rp {food?.price.toLocaleString()}</p>
        <p>Points: +{food?.points} Point(s)</p>
      </div>

      <div className="flex flex-col gap-6">
        <Input label="Quantity" type="number" />
        <Input label="Note" placeholder="Add your notes, e.g. Extra spicy" />
        <Button color="success" variant="shadow">
          Add to Cart
        </Button>
      </div>

      <div></div>
      <div></div>
    </div>
  );
};
