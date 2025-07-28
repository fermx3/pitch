"use client";

import { useCart, CartItem } from "@/app/context/CartContext";
import Button from "@/components/ui/button";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  // Usa precio_en_oferta si existe, si no usa price
  const getTotal = () =>
    cart.reduce(
      (sum: number, item: CartItem) =>
        sum +
        ((item.precio_en_oferta ?? item.price) * item.quantity),
      0
    );

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-600">Agrega productos para comenzar a comprar.</p>
        <Button variant="primary" className="mt-4" href="/dashboard/customer/products">
          Ver productos
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Carrito de compras</h1>
      <ul className="divide-y">
        {cart.map((item: CartItem) => (
          <li key={item.id} className="flex items-center justify-between py-4">
            <div>
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                Precio:{" "}
                {item.precio_en_oferta ? (
                  <>
                    <span className="text-red-600 font-bold">
                      ${item.precio_en_oferta.toFixed(2)}
                    </span>
                    <span className="line-through text-gray-400">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="ml-1 text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">
                      Oferta
                    </span>
                  </>
                ) : (
                  <span className="font-bold">${item.price.toFixed(2)}</span>
                )}
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Button
                  variant="outline"
                  className="px-2 py-1"
                  onClick={() =>
                    item.quantity > 1
                      ? updateQuantity(item.id, item.quantity - 1)
                      : removeFromCart(item.id)
                  }
                  type="button"
                >
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  variant="outline"
                  className="px-2 py-1"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  type="button"
                >
                  +
                </Button>
              </div>
            </div>
            <Button
              variant="danger"
              onClick={() => removeFromCart(item.id)}
              className="ml-4"
            >
              Quitar
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-8">
        <div className="text-xl font-bold">
          Total: ${getTotal().toFixed(2)}
        </div>
        <Button variant="outline" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
