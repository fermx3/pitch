import React, { useEffect } from "react";

interface ToastNotificationProps {
  message: string;
  show: boolean;
  onClose: () => void;
  duration?: number; // ms
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  show,
  onClose,
  duration = 2500,
}) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded shadow-lg z-50
        transition-opacity duration-300 opacity-100">
      {message}
    </div>
  );
};

export default ToastNotification;
