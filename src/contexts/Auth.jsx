import { Outlet, Navigate } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({ user: parsedData.user, token: parsedData.token });
      setIsAuthenticated(true); // Update isAuthenticated based on localStorage
      axios.defaults.headers.common["Authorization"] = `Bearer ${parsedData.token}`;
    }
  }, []);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
  }, [auth?.token]);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });

      if (data && data.user) {
        setAuth({ user: data.user, token: data.token });
        setIsAuthenticated(true);
        localStorage.setItem("auth", JSON.stringify(data));
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        return data;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(error?.response?.data?.message || "An error occurred while logging in");
    }
  };

  const signup = async (firstName, lastName, email, password) => {
    try {
      const { data } = await axios.post("/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      if (data.success) {
        setAuth({
          user: data.user,
          token: data.token,
        });
        setIsAuthenticated(true);
        localStorage.setItem("auth", JSON.stringify(data));
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      }
      return data;
    } catch (error) {
      console.error("Signup Error:", error);
      throw new Error(error?.response?.data?.message || "An error occurred while signing up");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    setAuth({ user: null, token: "" });
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ auth, isAuthenticated, setAuth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
