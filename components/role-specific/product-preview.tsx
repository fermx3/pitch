import Image from "next/image";

import Link from "next/link";
import Button from "../ui/button";

const ProductPreview = () => {
  return (
      <div className="flex bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 justify-between items-center gap-4">
        <div className="mb-4">
          <Image
            src="/img-placeholder.png"
            alt="Product Image"
            className="w-32 h-32 object-cover rounded-md"
            width={80}
            height={80}
            loading="lazy"
            unoptimized
            quality={75}
            placeholder="blur"
            blurDataURL="/img-placeholder.png"
            draggable={false}
            fetchPriority="low"
            priority={false}
          />
        </div>
        <div className="mb-2">
        <h4 className="text-md font-bold">Nombre del Producto</h4>
        <p className="text-gray-600">Descripción breve del producto.</p>
        <Button variant="link">
          <Link href="/product-details" className="text-blue-600 hover:underline">
            Detalles
          </Link>
        </Button>
        </div>
      </div>
  );
};

export default ProductPreview;
