import { createContext, useState, useContext} from "react";

export const Authcontext = createContext();

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
    <Authcontext.Provider value={{ isAuthenticated, login, logout,setIsAuthenticated }}>
      {children}
    </Authcontext.Provider>
  );
};