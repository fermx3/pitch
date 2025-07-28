"use client";

import { ShoppingCartIcon } from "lucide-react";
import Button from "../ui/button";

import { useCart } from "@/app/context/CartContext";
import Badge from "../ui/badge";

interface MenuBarButton {
  label: string;
  href: string;
}

interface MenuBarProps {
  buttons: MenuBarButton[];
}

const MenuBar = ({ buttons }: MenuBarProps) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex flex-wrap sm:flex-row flex-col-reverse items-center justify-between sm:gap-4 gap-8 sm:px-6 py-3 w-full max-w-dvh">
      <div className="flex flex-wrap sm:flex-row flex-col items-center gap-6 sm:gap-4 w-full sm:w-auto">
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant="outline"
            type="button"
            className="w-full sm:w-auto"
            href={button.href}
          >
            {button.label}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="icon" type="button" className="relative" href="/cart">
          <ShoppingCartIcon className="absolute w-full h-full inset-0" />
          {totalItems > 0 && (
            <Badge totalItems={totalItems}/>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default MenuBar;
