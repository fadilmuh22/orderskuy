import { useProduct, useProductToCart } from "@/api/products";
import { ProductToCartPayload } from "@/api/products/types";
import { IconProvider } from "@/components/common/IconProvider";
import { SectionHeader } from "@/components/common/SectionHeader";
import { InputText } from "@/components/form/InputText";
import { Button, CircularProgress, Image, Link } from "@nextui-org/react";
import classNames from "classnames";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const ProductDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { handleSubmit, reset, control } = useForm<ProductToCartPayload>({
    defaultValues: {
      qty: 1,
    },
  });

  const { data: productData, isLoading: isProductLoading } = useProduct(id);
  const { mutateAsync: addToCart, isPending: isAddToCartPending } =
    useProductToCart({
      onSuccess: () => {
        toast.success("Product added to cart successfully");
        reset();
      },
      onError: (error) => {
        toast.error(error.error_message);
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

      {isProductLoading && (
        <div className="flex flex-row justify-center items-center">
          <CircularProgress />
        </div>
      )}

      <Image
        src={product?.image}
        width="100%"
        className={classNames("w-full h-[240px]", {
          grayscale: product?.stock === 0,
          "hover:grayscale-0": true,
        })}
      />

      <div className="flex flex-col gap-2">
        <p>Name: {product?.name}</p>
        <p>Price: Rp {productPrice}</p>
        <p>Points: +{product?.point} Point(s)</p>
      </div>

      <form
        onSubmit={handleSubmit(onAddToCart)}
        className="flex flex-col gap-6"
      >
        <InputText
          control={control}
          name="qty"
          label="Quantity"
          type="number"
        />
        <InputText
          control={control}
          name="notes"
          label="Note"
          placeholder="Add your notes, e.g. Extra spicy"
        />

        <Button
          isDisabled={product?.stock === 0}
          isLoading={isAddToCartPending}
          type="submit"
          color="success"
          variant="shadow"
          className="text-white"
        >
          {product?.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </form>

      <div></div>
      <div></div>
    </div>
  );
};
