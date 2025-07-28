"use client";

import { useEffect, useState } from 'react';

import MenuBar from "@/components/layout/menu-bar";
import SectionHeader from "@/components/layout/section-header";
import ProductsGrid from "@/components/products/products-grid";
import Card from "@/components/ui/card";
import Grid from "@/components/ui/grid";

const CustomerPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products/top');
      console.log(res)
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center container mx-auto mt-8 px-4 max-w-dvw">
      <SectionHeader
        title="Bienvenido a tu Panel de Cliente"
        description="Aquí puedes ver tus promociones y productos destacados."
      />
      <MenuBar buttons={[
        { label: "Promociones", href: "/dashboard/customer/promotions" },
        { label: "Productos", href: "/dashboard/customer/products" },
        { label: "Pedidos", href: "/dashboard/customer/orders" },
        { label: "Perfil", href: "/dashboard/customer/profile" },
        { label: "Soporte", href: "/dashboard/customer/support" }
      ]}/>
      <Grid>
        <Card
          title="Promociones Especiales"
          description="Descubre nuestras últimas ofertas y promociones exclusivas para clientes."
          buttonText="Ver más"
          href='/dashboard/customer/promotions'
        >
          <p className="mt-2 text-gray-500">
            Aprovecha descuentos exclusivos y ofertas limitadas solo para ti.
          </p>
        </Card>
        <Card
          title="Top Productos"
          description="Explora los productos más populares entre nuestros clientes."
          buttonText="Ver más"
          href='/dashboard/customer/products'

        >
          <ProductsGrid isPreview={true} horizontal products={products} />
        </Card>
      </Grid>
    </div>
  );
};

export default CustomerPage;
