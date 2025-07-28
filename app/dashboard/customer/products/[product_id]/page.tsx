"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProductType } from "@/types/product";
import Card from "@/components/ui/card";
import Product from "@/components/products/product";

const ProductDetailPage = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product_id) return;
    setLoading(true);
    fetch(`/api/products/${product_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || (Array.isArray(data) && data.length === 0)) {
          setProduct(null);
        } else {
          setProduct(data);
        }
      })
      .finally(() => setLoading(false));
  }, [product_id]);

  if (loading) {
    return <div className="p-8 text-center">Cargando producto...</div>;
  }

  if (!product) {
    return (
      <div className="p-8 text-center text-red-500">
        Producto no encontrado.
      </div>
    );
  }

  console.log(product);


  return (
    <div className="container mx-auto mt-8 px-4 max-w-3xl">
      <Card>
        <Product {...product} />
      </Card>
    </div>
  );
};

export default ProductDetailPage;
