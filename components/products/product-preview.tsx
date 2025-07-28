import Image from "next/image";
import Button from "../ui/button";
import { ProductType } from "@/types/product";
import AddToCartButton from "./add-to-cart-button";
import Card from "../ui/card";
import Link from "next/link";

interface ProductPreviewProps extends ProductType {
  horizontal?: boolean;
}

const ProductPreview = (props: ProductPreviewProps) => {
  const { horizontal, precio_en_oferta, price, ...productProps } = props;

  return (
    <Card horizontal={horizontal}>
      <div className="mb-4 flex justify-center items-center">
        <Image
          src={productProps.image_url || "/img-placeholder.png"}
          alt={`Imágen de ${productProps.name}`}
          className="w-32 h-32 object-cover rounded-md"
          width={80}
          height={80}
          loading="lazy"
          unoptimized
          quality={75}
          placeholder="blur"
          blurDataURL={productProps.image_url || "/img-placeholder.png"}
          draggable={false}
          fetchPriority="low"
          priority={false}
        />
      </div>
      <div className={`${horizontal ? "w-full shrink-10" : "flex flex-col"} mb-2`}>
        <div className="flex items-baseline gap-2">
          {precio_en_oferta ? (
            <>
              <span className="text-lg font-bold text-red-600">
                ${precio_en_oferta.toFixed(2)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${price.toFixed(2)}
              </span>
              <span className="ml-2 text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">
                Oferta
              </span>
            </>
          ) : (
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
          )}
        </div>
        <h4 className="text-md font-bold">{productProps.name}</h4>
        {productProps.category && (
          <Link href={`/dashboard/customer/products/categories/${productProps.category}`} className="text-xs text-gray-400 mb-1 capitalize">
            {productProps.category}
          </Link>
        )}

        <p className="text-gray-600">{productProps.short_description}</p>
        <Button
          variant="link"
          href={`/dashboard/customer/products/${productProps.id}`}
          className="mt-2"
        >
          Detalles
        </Button>
        <AddToCartButton
          product={{
            ...productProps,
            id: productProps.id,
            price,
            precio_en_oferta,
          }}
        />
      </div>
    </Card>
  );
};

export default ProductPreview;
