"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  // Birden fazla medya varsa hover sırasında gösterilecek diğer resimler
  const additionalImages = product.media.slice(1);

  // Ürünün mevcut renkleri
  const availableColors = product.colors || [];

  return (
    <Link
      href={`/products/${product._id}`}
      className="w-full sm:w-[200px] md:w-[220px] lg:w-[250px] flex flex-col gap-2 bg-white border border-grey-1 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
    >
      <div className="relative w-full h-[200px] md:h-[220px] lg:h-[250px] overflow-hidden">
        <Image
          src={product.media[0]}
          alt="product"
          width={250}
          height={250}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {additionalImages.length > 0 && (
          <div className="absolute inset-0 flex gap-1 p-2 justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {additionalImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={60}
                height={60}
                alt="product"
                className="w-16 h-16 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-3 flex flex-col gap-2">
        <p className="text-base-bold text-primary">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>

        {/* Renkler */}
        {availableColors.length > 0 && (
          <div className="flex gap-2 mt-2">
            {availableColors.map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-2">
          <p className="text-base-bold text-secondary">{product.price} $</p>
          <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
