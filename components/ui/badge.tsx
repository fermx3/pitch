"use client";

import { useEffect, useState } from "react";

interface BadgeProps {
  totalItems: number;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ totalItems, className = "" }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <span
      className={`absolute bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow
        ${animate ? "animate-bounce" : ""}
        transition-all duration-300 ${className}`}
    >
      {totalItems}
    </span>
  );
};
export default Badge;
