'use client';
import Button from "@/components/ui/button";
import React, { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  children,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {description && <p className="text-gray-700">{description}</p>}
      {children}
      {buttonText && (
        <Button
          onClick={onButtonClick}
          className="mt-4"
          variant="primary"
          type="button"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default Card;
