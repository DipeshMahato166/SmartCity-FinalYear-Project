import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaBuildingColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Services", path: "/services" },
    { name: "Events & Announcements", path: "/event" },
    { name: "File a Complaint", path: "/complaintwizard" },
    { name: "Emergency Services", path: "/emergency" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        
        {/* --- MAIN GRID SECTION --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Identity & Brand */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <FaBuildingColumns className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Smart City
                  </h2>
                  <p className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold">
                    Service Portal
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-xs">
                Digital government services engineered for transparent, efficient, and citizen-centric municipal governance.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-blue-600 border border-slate-800 text-slate-300 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-sky-500 border border-slate-800 text-slate-300 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-red-600 border border-slate-800 text-slate-300 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-emerald-400">
                      &middot;
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-6">
              Departments
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-slate-200 transition-colors cursor-pointer">Waste Management</li>
              <li className="hover:text-slate-200 transition-colors cursor-pointer">Electricity Authority</li>
              <li className="hover:text-slate-200 transition-colors cursor-pointer">Water Supply</li>
              <li className="hover:text-slate-200 transition-colors cursor-pointer">Roads & Infrastructure</li>
            </ul>
          </div>

          {/* Column 4: Official Contact Meta */}
          <div>
            <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-6">
              Contact Desk
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <FiPhone />
                </div>
                <span className="text-slate-300 tracking-wide">+977 9765531598</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <FiMail />
                </div>
                <span className="text-slate-300 break-all">info@smartcity.gov.np</span>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors shrink-0">
                  <FiMapPin />
                </div>
                <span className="text-slate-300 pt-1 leading-relaxed">
                  Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM COMPLIANCE SECTION --- */}
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Smart City Service Portal. All Rights Reserved. Govt. of Nepal.
          </p>

          <div className="flex gap-6 text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;