import { createContext, useState, useContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("Token")
  );

  const login = (token) => {
    localStorage.setItem("Token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log("Logout triggered!");
    localStorage.removeItem("Token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};