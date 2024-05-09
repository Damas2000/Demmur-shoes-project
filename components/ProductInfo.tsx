"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[700px] flex flex-col gap-4 p-6 bg-white border border-grey-1 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-heading3-bold text-primary">{productInfo.title}</h1>
        <div className="ml-4">
          <HeartFavorite product={productInfo} />
        </div>
      </div>

      {/* Kategori */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-small-medium text-grey-2">Category:</span>
        <span className="text-base-bold text-primary">{productInfo.category}</span>
      </div>

      {/* Fiyat */}
      <div className="flex flex-col gap-1 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-small-medium text-grey-2">Price :</span>
          <span className="text-base-bold text-secondary">${productInfo.price}</span>
        </div>
      </div>

      {/* Mevcut Renkler */}
      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2 mb-4">
          <span className="text-base-medium text-grey-2">Colors:</span>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <span
                key={index}
                className={`border border-primary px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color ? "bg-primary text-white" : "text-primary"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mevcut Bedenler */}
      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2 mb-4">
          <span className="text-base-medium text-grey-2">Sizes:</span>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <span
                key={index}
                className={`border border-primary px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size ? "bg-primary text-white" : "text-primary"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Miktar ve Sepete Ekle */}
      <div className="flex flex-col gap-2 mb-4">
        <span className="text-base-medium text-grey-2">Quantity:</span>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <span className="text-body-bold text-primary">{quantity}</span>
          <PlusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="bg-accent text-white text-base-bold py-3 rounded-lg hover:bg-accent-dark transition-all duration-300"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductInfo;
