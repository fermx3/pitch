import Product from "./product";
import ProductPreview from "./product-preview";
import { ProductType } from "@/types/product";

type ProductsGridProps = {
  isPreview?: boolean,
  horizontal?: boolean;
  products: ProductType[];
};

const ProductsGrid = ({ isPreview, horizontal, products }: ProductsGridProps) => {

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {products.length > 0 ? (
        products.map((product: ProductType) =>
          isPreview ? (
            <ProductPreview key={product.id} {...product} horizontal={horizontal} />
          ) : (
            <div key={product.id}>
              <Product {...product} />
            </div>
          )
        )
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductsGrid;
