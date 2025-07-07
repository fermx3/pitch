"use client";
import MenuBar from "@/components/layout/menu-bar";
import SectionHeader from "@/components/layout/section-header";
import ProductPreview from "@/components/role-specific/product-preview";
import Card from "@/components/ui/card";
import Grid from "@/components/ui/grid";

const CustomerPage = () => {
  return (
    <div className="flex flex-col items-center container mx-auto mt-8 px-4 max-w-dvw">
      <SectionHeader
        title="Bienvenido a tu Panel de Cliente"
        description="Aquí puedes ver tus promociones y productos destacados."
      />
      <MenuBar buttons={[
        { label: "Promociones", href: "/dashboard/customer/promotions" },
        { label: "Pedidos", href: "/dashboard/customer/orders" },
        { label: "Productos", href: "/dashboard/customer/products" },
        { label: "Perfil", href: "/dashboard/customer/profile" },
        { label: "Soporte", href: "/dashboard/customer/support" }
      ]}/>
      <Grid>
        <Card
          title="Promociones Especiales"
          description="Descubre nuestras últimas ofertas y promociones exclusivas para clientes."
          buttonText="Ver más"
          onButtonClick={() => alert("Ver promociones clicked!")}
        >
          <p className="mt-2 text-gray-500">
            Aprovecha descuentos exclusivos y ofertas limitadas solo para ti.
          </p>
        </Card>
        <Card
          title="Top Productos"
          description="Explora los productos más populares entre nuestros clientes."
          buttonText="Ver más"
          onButtonClick={() => alert("Ver productos clicked!")}
        >
          <div className="grid grid-cols-1 gap-4">
            <ProductPreview />
            <ProductPreview />
          </div>
        </Card>
      </Grid>
    </div>
  );
};

export default CustomerPage;
