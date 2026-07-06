import React, { useContext } from "react";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/Authcontext";
import { MdNotificationImportant } from "react-icons/md";


const Navbar = () => {
  const { isAuthenticated, logout } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Remove token, update state
    navigate("/login", { replace: true });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-2xl  ">
      <div className="flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-xl font-bold ">Smart City</span>
          <span className=" text-[#DC143C]">Service portal</span>
         
        </div>

        <div>
          {/* Menu */}
          <ul className="flex items-center text-[#131b29] gap-8  ">
            <li className="hover:text-[#B01030]"><Link to="/">Home</Link></li>
            <li className="hover:text-[#B01030]"><Link to="/services">Services</Link></li>
            <li className="hover:text-[#B01030]"><Link to="/event">Events</Link></li>
            <li className="hover:text-[#B01030]"><Link to="/complaintwizard">Complain section</Link></li>
          <li className="hover:text-[#B01030] "><Link to="/emergency"> Emergency</Link></li>
          </ul>
        </div>
        
        {isAuthenticated ? (
          <button
            className="bg-[#DC143C]  hover:bg-[#B01030] border h-10 flex justify-center items-center text-white p-2 rounded-xl w-30 text-lg"
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