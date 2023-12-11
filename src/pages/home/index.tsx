import { Banner } from "@/components/common/Banner";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductTopGrid } from "@/components/products/ProductTopGrid";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <Banner />

      <SectionHeader
        title="Satisfy your Cravings"
        subtitle="with a few clicks!"
      />

      <div className="flex flex-col justify-center gap-6">
        <ProductTopGrid />
      </div>
    </div>
  );
};
