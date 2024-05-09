
import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 bg-light min-h-screen">
      <p className="text-heading1-bold text-primary">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold text-secondary">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: any) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group bg-white">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-white">{collection.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
