import ProductCard from "@/components/ProductCard";
import { getSearchedProducts } from "@/lib/actions/actions";

const SearchPage = async ({ params }: { params: { query: string } }) => {
  const searchedProducts = await getSearchedProducts(params.query);

  const decodedQuery = decodeURIComponent(params.query);

  return (
    <div className="px-6 py-10">
      <h2 className="text-heading2-bold text-primary text-center mb-10 animate-fade-in-up">
        Search Results for "{decodedQuery}"
      </h2>
      {!searchedProducts || (searchedProducts.length === 0 && (
        <p className="text-body-bold text-red-1 text-center animate-fade-in-up">
          No results found
        </p>
      ))}
      <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 animate-fade-in-up">
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default SearchPage;
