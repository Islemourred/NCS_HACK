/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useCallback } from "react";
import Notification from "./Notification";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    message: "",
    type: "info",
  });

  const showNotification = useCallback((message, type = "info") => {
    setNotification({ message, type });
  }, []);

  const handleClose = () => setNotification({ ...notification, message: "" });

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={handleClose}
      />
    </NotificationContext.Provider>
  );
};
