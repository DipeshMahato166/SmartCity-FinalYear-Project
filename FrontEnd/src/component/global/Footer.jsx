import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaBuildingColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    const quickLinks=[
        {name:"Services", path:"/services"},
        {name:"Event", path:"/event"},
        {name:"File a Complaint", path:"/complaintwizard"},
        {name:"Emegency", path:"/emergency"}
    ]
  return (
    <footer className="bg-[#173B63] text-gray-300  ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center">
                <FaBuildingColumns className="text-white text-xl" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Smart City
              </h2>
            </div>

            <p className="mt-6 text-gray-400 leading-8">
              Digital government services for transparent,
              efficient and citizen-centric governance.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#21486f] hover:bg-blue-500 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#21486f] hover:bg-blue-400 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#21486f] hover:bg-red-500 transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white font-semibold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}
                
                    className="hover:text-emerald-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}

          <div>
            <h3 className="text-white font-semibold text-xl mb-6">
              Departments
            </h3>

            <ul className="space-y-4">
            
                <li>Waste Management</li>
                <li>Electricity Authority</li>
                <li>Water Supply</li>
                <li>Road & Infrastructure</li>
               
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white font-semibold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FiPhone className="text-emerald-400 text-lg" />
                <span>+977 9765531598</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-emerald-400 text-lg" />
                <span>info@smartcity.gov.np</span>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="text-emerald-400 text-lg mt-1" />
                <span>
                  Kathmandu, Nepal

                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center md:text-left">
            © 2026 Smart City Service Portal, Government of Nepal.
          </p>

          <div className="flex gap-8">

            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;