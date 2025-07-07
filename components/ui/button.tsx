import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline" | "link" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
  outline: "bg-transparent border border-blue-500 rounded-full text-blue-500 hover:bg-blue-50",
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
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "primary",
  type = "button",
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer
        ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${className}
        ${variant === "link" ? "border-none shadow-none" : ""}
        ${variant === "icon" ? "p-2 w-10 h-10" : ""}
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
