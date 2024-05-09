"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMagnifierPos({ x, y });
    }
  };

  const magnifierSize = 250;
  const zoomLevel = 3;

  return (
    <div className="relative flex gap-6 items-start max-w-[500px]">
      {/* Sabit Büyüteç Kutusu */}
      {isHovered && (
        <div
          className="absolute w-[250px] h-[250px] border border-black bg-white rounded-lg shadow-md overflow-hidden pointer-events-none z-50"
          style={{
            backgroundImage: `url(${mainImage})`,
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundPosition: `${magnifierPos.x}% ${magnifierPos.y}%`,
            top: "0",
            left: "-300px",
          }}
        ></div>
      )}

      {/* Ana Resim */}
      <div
        ref={imageRef}
        className="relative w-100 h-100 cursor-crosshair rounded-lg shadow-xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={mainImage}
          width={500}
          height={500}
          alt="product"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Küçük Resimler */}
      <div className="flex flex-col gap-2">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={80}
            height={80}
            alt="product"
            className={`w-16 h-16 rounded-lg object-cover cursor-pointer ${
              mainImage === image ? "border-2 border-black" : ""
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
