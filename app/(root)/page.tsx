import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* PC Banner */}
      <div className="relative w-full h-screen overflow-hidden hidden md:block">
        <Image
          src="/banner.png"
          alt="PC Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out hover:scale-105"
        />
      </div>
      {/* Mobil Banner */}
      <div className="relative w-full h-screen overflow-hidden block md:hidden">
        <Image
          src="/banner-mobile.png"
          alt="Mobil Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out hover:scale-105"
        />
      </div>
      <div className="px-6 py-10 space-y-16 bg-light">
        {/* Koleksiyonlar */}
        <section className="space-y-6">
          <Collections />
        </section>


        {/* Ürünler */}
        <section className="space-y-6">
          <ProductList />
        </section>
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
