import { useProduct, useProductToCart } from "@/api/products";
import { ProductToCartPayload } from "@/api/products/types";
import { IconProvider } from "@/components/common/IconProvider";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button, Image, Input, Link } from "@nextui-org/react";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const ProductDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<ProductToCartPayload>();

  const { data: productData, isLoading: isProductLoading } = useProduct(id);
  const { mutateAsync: addToCart, isPending: isAddToCartPending } =
    useProductToCart({
      onSuccess: () => {
        toast.success("Product added to cart successfully");
        reset();
      },
    });

  useEffect(() => {
    if (id == "") {
      navigate("..");
    }
  }, [id, navigate]);

  const product = useMemo(() => productData?.items[0], [productData]);

  const productPrice = useMemo(
    () => parseInt(product?.price ?? "0").toLocaleString(),
    [product]
  );

  const onAddToCart = async (payload: ProductToCartPayload) => {
    if (!product) return;
    await addToCart({
      product_id: parseInt(id),
      qty: payload.qty,
      notes: payload.notes,
    });
  };

  return (
    <div className="flex flex-col gap-6 p-4">
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

      <SectionHeader title="Food" subtitle="Detail" />

      {isProductLoading && <>Loading...</>}

      <Image src={product?.image} width="100%" className="w-full h-[240px]" />

      <div className="flex flex-col gap-2">
        <p>Name: {product?.name}</p>
        <p>Price: Rp {productPrice}</p>
        <p>Points: +{product?.point} Point(s)</p>
      </div>

      <form
        onSubmit={handleSubmit(onAddToCart)}
        className="flex flex-col gap-6"
      >
        <Input
          label="Quantity"
          type="number"
          {...register("qty", { required: true })}
        />
        <Input
          label="Note"
          placeholder="Add your notes, e.g. Extra spicy"
          {...register("notes")}
        />
        <Button
          isLoading={isAddToCartPending}
          type="submit"
          color="success"
          variant="shadow"
          className="text-white"
        >
          Add to Cart
        </Button>
      </form>

      <div></div>
      <div></div>
    </div>
  );
};
