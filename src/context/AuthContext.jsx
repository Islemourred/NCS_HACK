import React, { createContext, useContext, useState, useEffect } from "react";
import { login as apiLogin } from "../utils/api_users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("colis_auth");
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(
    () => localStorage.getItem("colis_token") || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user && token) {
      localStorage.setItem("colis_auth", JSON.stringify(user));
      localStorage.setItem("colis_token", token);
    } else {
      localStorage.removeItem("colis_auth");
      localStorage.removeItem("colis_token");
    }
  }, [user, token]);

  const login = async (numero_de_telephone, password) => {
    setLoading(true);
    setError(null);
    try {
      const { token, user } = await apiLogin(numero_de_telephone, password);
      setUser(user);
      setToken(token);
      setLoading(false);
      return user;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
