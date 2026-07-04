import React, { useContext } from "react";
import Button from "../Complaint/Button";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/Authcontext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Remove token, update state
    navigate("/login", { replace: true });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#003893] shadow-lg text-white font-serif">
      <div className="flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <div>
          <span className="text-4xl font-bold">Smart</span>
          <span className="text-4xl font-bold text-[#DC143C]">City</span>
          <br />
          <span className="text-xl flex justify-center">
            Portal
          </span>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-8 text-lg ">
          <li  className="hover:text-[#B01030]"><Link to="/">Home</Link></li>
          <li className="hover:text-[#B01030]"><Link to="/services">Services</Link></li>
          <li className="hover:text-[#B01030]"><Link to="/event">Events</Link></li>
          <li className="hover:text-[#B01030]"><Link to="/gallery">Gallery</Link></li>
          <li className="hover:text-[#B01030]"><Link to="/emergency">Emergency</Link></li>
          <li className="hover:text-[#B01030]"><Link to="/complaintwizard">Complain section</Link></li>
          <li className="hover:text-[#B01030]"><Link to="/about">About Us</Link></li>
        </ul>

        {isAuthenticated ? (
          <button
            className="bg-[#DC143C]  hover:bg-[#B01030] border text-white p-2 rounded-xl w-30 text-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <Button props={{ text: "Login" }} />
            </Link>

            <Link to="/signup">
              <Button
                props={{
                  text: "Signup",
                  bg: "bg-[#DC143C]",
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