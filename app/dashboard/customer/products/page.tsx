'use client';

import { useEffect, useState } from 'react';

import ProductsGrid from "@/components/products/products-grid";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      async function fetchProducts() {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      }
      fetchProducts();
    }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos los productos</h1>
      <ProductsGrid products={products} isPreview />
    </div>
  );
}

export default ProductsPage;
