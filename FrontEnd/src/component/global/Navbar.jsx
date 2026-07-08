import React, { useContext } from "react";
import Button from "../common/Button";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/Authcontext";
import { FaBuildingColumns } from "react-icons/fa6";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/event" },
    { name: "Complaint Section", path: "/complaintwizard" },
    { name: "Emergency", path: "/emergency" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-2xl px-10">
      <div className="flex justify-between items-center py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#164a79] flex items-center justify-center">
            <FaBuildingColumns className="text-white text-xl" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold">Smart City</span>
            <span className="text-[#68696b]">Service Portal</span>
          </div>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-3 text-[#164a79] ">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#164a79]/30 text-[#164a79] "
                      : "hover:bg-[#164a79]/10 hover:text-[#164a79]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-[#164a79] hover:bg-[#0b3860] text-white px-6 py-2 rounded-xl transition duration-300"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <Button props={{ text: "Login",clolor:"text-black" }} />
            </Link>

            <Link to="/signup">
              <Button
                props={{
                  text: "Signup",
                  bg: "bg-[#164a79]",
                  color:"text-white"
                }}
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;