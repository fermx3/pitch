import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const CartCountButton = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="relative flex flex-col items-center group">
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-0.5 shadow border border-yellow-700 min-w-[1.5rem] text-center">
        {totalItems}
      </span>
      <ShoppingCartIcon className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors" />
      <span className="text-xs mt-1 text-white group-hover:text-yellow-400 font-semibold">
        Carrito
      </span>
    </Link>
  );
};

export default CartCountButton;
