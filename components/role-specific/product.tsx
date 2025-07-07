import Image from "next/image";
import Card from "../ui/card"
import React from "react";

type ProductProps = React.ComponentProps<typeof Card> &
  Omit<React.ComponentProps<typeof Image>, "src"> & {
    src?: string;
  };

const Product: React.FC<ProductProps> = (props) => {
  return (
    <Card
      title={props.title ?? "Product Title"}
      description={props.description ?? "This is a detailed description of the product."}
      buttonText={props.buttonText ?? "Add to Cart"}
      onButtonClick={props.onButtonClick ?? (() => alert("Product added to cart!"))}
      {...props}
    >
      <Image
        src={props.src ?? "/img-placeholder.png"}
        alt={props.alt ?? "Product Image"}
        width={props.width ?? 300}
        height={props.height ?? 200}
      />
    </Card>
  );
}

export default Product;
