import React, { useEffect } from "react";

const typeStyles = {
  success: "bg-success-100 text-success-800 border-success-300",
  error: "bg-error-100 text-error-800 border-error-300",
  info: "bg-primary-100 text-primary-800 border-primary-300",
};

const Notification = ({ message, type = "info", onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-lg border-l-4 transition-all ${typeStyles[type]}`}
      role="alert"
    >
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button onClick={onClose} className="text-xl font-bold px-2">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;
