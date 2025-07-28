'use client';
import Button from "@/components/ui/button";
import React, { ReactNode } from "react";

interface CardProps {
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
  onButtonClick?: () => void;
  href?: string;
  children?: ReactNode;
  horizontal?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  href,
  children,
  horizontal = false,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6`}
    >
      <div className={
        horizontal ? "flex flex-row items-center gap-6" : ""}>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        {description && <p className="text-gray-700">{description}</p>}
        {children}
        {buttonText && (
          <Button
            onClick={onButtonClick}
            className="mt-4"
            variant="primary"
            type="button"
            href={href}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
