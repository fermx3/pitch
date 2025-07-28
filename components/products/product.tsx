import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./add-to-cart-button";
import React from "react";
import { ProductType } from "@/types/product";



const Product = (product: ProductType) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Image
        src={product.image_url || "/img-placeholder.png"}
        alt={product.name}
        width={300}
        height={300}
        className="rounded object-cover bg-gray-100"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        {product.category && (
          <Link href={`/dashboard/customer/products/categories/${product.category}`} className="text-xs text-gray-400 mb-1 capitalize">
            {product.category}
          </Link>
        )}
        <div className="mb-4">
          {product.precio_en_oferta ? (
            <>
              <span className="text-2xl font-bold text-red-600 mr-2">
                ${product.precio_en_oferta.toFixed(2)}
              </span>
              <span className="text-lg text-gray-400 line-through">
                ${product.price.toFixed(2)}
              </span>
              <span className="ml-2 text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">
                Oferta
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        <div className="mb-4 text-gray-700">{product.description}</div>
        <div className="mb-2 text-sm text-gray-500">Stock: {product.stock}</div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default Product;
