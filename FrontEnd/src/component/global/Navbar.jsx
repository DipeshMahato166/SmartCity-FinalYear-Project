import React, { useContext, useState } from "react";
import Button from "../common/Button";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaBuildingColumns } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/event" },
    { name: "Complaints", path: "/complaintwizard" },
    { name: "Emergency", path: "/emergency" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#164a79] flex items-center justify-center shadow-lg">
              <FaBuildingColumns className="text-white text-xl" />
            </div>

            <div>
              <h1 className="font-bold text-lg text-[#164a79]">
                Smart City
              </h1>
              <p className="text-xs text-gray-500">
                Service Portal
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  end={item.path === "/"}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#164a79] text-white shadow-md"
                        : "text-gray-700 hover:bg-[#164a79]/10 hover:text-[#164a79]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-[#164a79] hover:bg-[#12395e] text-white px-6 py-2 rounded-xl transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    props={{
                      text: "Login",
                      color: "text-[#164a79]",
                    }}
                  />
                </Link>

                <Link to="/signup">
                  <Button
                    props={{
                      text: "Sign Up",
                      bg: "bg-[#164a79]",
                      color: "text-white",
                    }}
                  />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-[#164a79]"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t px-5 py-5 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              end={item.path === "/"}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-[#164a79] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="pt-4 border-t mt-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full bg-[#164a79] text-white py-3 rounded-xl"
              >
                Logout
              </button>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  <button className="w-full border border-[#164a79] text-[#164a79] py-3 rounded-xl">
                    Login
                  </button>
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  <button className="w-full bg-[#164a79] text-white py-3 rounded-xl">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;