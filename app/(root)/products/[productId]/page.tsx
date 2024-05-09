import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = await getProductDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <>
      {/* Ürün Detayları */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-16 py-10 px-5">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>

      {/* İlgili Ürünler */}
      <div className="flex flex-col items-center px-10 py-10 bg-light max-md:px-3">
        <h2 className="text-heading2-bold text-primary mb-8 animate-fade-in-up">
          Related Products
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
          {relatedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;
