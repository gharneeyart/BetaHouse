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
        axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
      }, [auth?.token]);
    
      useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
          const parsedData = JSON.parse(data);
          setAuth({ ...auth, user: parsedData.user, token: parsedData.token });
        }
      }, []);

      const login = async (email, password) => {
        try {
          const { data } = await axios.post("/auth/login", {
            email,
            password,
          });
      
          if (data && data.user) {
            // Login successful
            setIsAuthenticated(true);
            setAuth({ user: data.user, token: data.user.token });
            localStorage.setItem("auth", JSON.stringify(data));
            return data;
          } else {
            // Login failed
            return false;
          }
        } catch (error) {
          console.error("Login error:", error);
          if (error?.response && error?.response?.data && error?.response?.data?.message) {
            throw new Error(error.response.data.message); 
          } else {
            throw new Error("An error occurred while logging in");
          }
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
    
            if (data.success) {  // Check for success based on server response
                setAuth({
                    user: data.user,
                    token: data.token,
                });
                localStorage.setItem("auth", JSON.stringify(data));
            }
            return data;
        } catch (error) {
            console.error("Signup Error:", error);
            if (error?.response && error?.response?.data && error?.response?.data) {
                throw new Error(error.response.data.message); 
              } else {
                throw new Error("An error occurred while logging in");
              }
        }
    };

      const logout = () => {
        // Clear auth data
        localStorage.removeItem("auth");
        setIsAuthenticated(false);
        setAuth({ user: null, token: "" });
      };

      return (
        <AuthContext.Provider value={{ auth, isAuthenticated, setAuth, login, signup, logout}}>
          {children}
        </AuthContext.Provider>
      );
    
}
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
