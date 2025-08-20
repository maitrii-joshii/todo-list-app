import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("token");
    const [isAuthenticated, setisAuthenticated] = useState(!!token);

    const login = (token) => {
        localStorage.setItem("token", token);
        setisAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setisAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);