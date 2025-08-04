import Link from "next/link";
import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "link"
  | "icon"
  | "cta";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  cta: "bg-yellow-300 text-black hover:bg-yellow-400",
  danger: "bg-red-500 text-white hover:bg-red-600",
  outline:
    "bg-transparent border border-blue-500 rounded-full text-blue-500 hover:bg-blue-50",
  link: "bg-transparent text-blue-500 hover:text-blue-700 p-0",
  icon: "bg-transparent text-blue-500 hover:bg-blue-100 p-2 rounded-full flex items-center justify-center",
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  href?: string; // For link variant
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "primary",
  type = "button",
  href,
  fullWidth = false,
}) => {
  const baseClasses = `
    px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer
    ${variantClasses[variant]}
    ${fullWidth ? "w-full" : ""}
    ${variant === "link" ? "border-none shadow-none" : ""}
    ${variant === "icon" ? "p-2 w-10 h-10" : ""}
    ${disabled && variant !== "link" ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  // If the button is disabled and not a link, apply additional styles
  if (disabled && variant !== "link") {
    className += " opacity-50 cursor-not-allowed";
  }

  // If href is provided, render as a link
  if (href) {
    return (
      <Link
        href={href}
        className={`inline-block text-center ${baseClasses}`}
        {...(type !== "button" ? { type } : {})}
        {...(onClick ? { onClick } : {})}
        {...(disabled ? { "aria-disabled": true } : {})}
      >
        {children}
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
