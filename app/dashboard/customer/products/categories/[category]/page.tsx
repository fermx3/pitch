"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductsGrid from "@/components/products/products-grid";
import { ProductType } from "@/types/product";
import Button from "@/components/ui/button";

const CategoryProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    fetch(`/api/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Productos en la categoría: {category}</h1>
      {loading ? (
        <div>Cargando productos...</div>
      ) : (
        <ProductsGrid products={products} isPreview />
      )}
      {products.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No hay productos disponibles en esta categoría.
        </div>
      )}
      <div className="mt-8">
        <Button href="/dashboard/customer/products" variant="secondary">
          Volver a Productos
        </Button>
      </div>
    </div>
  );
}

export default CategoryProductsPage;
