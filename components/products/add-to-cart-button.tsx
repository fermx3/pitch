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
  const { addToCart, cart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [message, setMessage] = useState("");

  // Calculate how many of this product are already in the cart
  const cartQuantity = cart?.find((item) => item.id === product.id)?.quantity || 0;
  const maxAvailable = product.stock - cartQuantity;

  const handleAddToCart = () => {
    if (selectedQuantity === 0) {
      setMessage("Por favor, selecciona una cantidad válida.");
      setShowToast(true);
      return;
    }
    addToCart({
      ...product,
      id: Number(product.id),
      quantity: selectedQuantity,
    });
    setMessage(`Producto añadido al carrito: ${product.name} (${selectedQuantity})`);
    setShowToast(true);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setSelectedQuantity(0);
    } else {
      const value = Math.max(1, Math.min(maxAvailable, Number(inputValue)));
      setSelectedQuantity(isNaN(value) ? 1 : value);
    }
  };

  if (maxAvailable <= 0) {
    return (
      <Button className="w-full" disabled>
        Sin stock
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4 justify-end flex-wrap">
      <input
        type="number"
        min={1}
        max={product.stock}
        value={selectedQuantity === 0 ? "" : selectedQuantity}
        onChange={(e) => {
          handleQuantityChange(e);
        }}
        className="mr-2 rounded border px-2 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none w-16"
      />
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
        message={message}
        color={selectedQuantity === 0 ? "red" : "black"}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default AddToCartButton;
