"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

import Button from "../ui/button";
import ToastNotification from "../ui/toast-notification";

import { ProductType } from "@/types/product";

type AddToCartButtonProps = {
  product: ProductType;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, id: Number(product.id), quantity: 1 });
    setShowToast(true);
  };

  return (
    <>
      <Button
        variant="cta"
        onClick={handleAddToCart}
        className="flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 6h15l-1.5 9h-13z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="20" r="1" fill="currentColor" />
          <circle cx="18" cy="20" r="1" fill="currentColor" />
        </svg>
        Añadir al carrito
      </Button>
      <ToastNotification
        message={`"${product.name}" ha sido añadido al carrito.`}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default AddToCartButton;
