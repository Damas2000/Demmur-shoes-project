import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 bg-light min-h-screen">
      <p className="text-heading1-bold text-primary">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold text-secondary">No products found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
