import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { GoReport } from "react-icons/go";
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import { PiNoteBold } from "react-icons/pi";
import { IoLocationOutline, IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineTrackChanges, MdContactEmergency } from "react-icons/md";

const Herosec = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <div className="relative relative-box min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://marditreknepal.com/wp-content/uploads/2025/05/Mountaintop-Temple-with-Prayer-Flags.webp"
          alt="Smart City Hero"
          className="absolute inset-0 h-full w-full object-cover transform scale-105 select-none"
        />
        
        {/* Sleek Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/85 via-slate-900/75 to-slate-900/40"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-20 md:py-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Smart City <span className="text-amber-400 font-serif italic font-normal">Service Portal</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed">
            Digital government services for transparent, efficient, and citizen-centric governance. 
            Accessible anytime, from anywhere.
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <Link to="/signup" className="w-full sm:w-auto">
              <button className="w-full sm:w-48 h-12 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-semibold rounded-lg flex justify-center items-center gap-2 transition-all duration-200 shadow-lg shadow-amber-500/20 group">
                Get Started 
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/complaintwizard" className="w-full sm:w-auto">
              <button className="w-full sm:w-48 h-12 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-md border border-white/20 flex justify-center items-center gap-2 transition-all duration-200">
                <GoReport className="text-amber-400 text-lg" />
                File Complaint
              </button>
            </Link>
          </div>
        </div>

        {/* --- STATS SECTION (Integrated Cleanly) --- */}
        <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200/50 hidden md:block z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-4 divide-x divide-slate-100 py-6 text-center">
            <div className="px-4">
              <div className="text-2xl lg:text-3xl font-bold text-slate-900">10,000+</div>
              <div className="text-xs lg:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Total Citizenship</div>
            </div>
            <div className="px-4">
              <div className="text-2xl lg:text-3xl font-bold text-slate-900">100+</div>
              <div className="text-xs lg:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Complaints Solved</div>
            </div>
            <div className="px-4">
              <div className="text-2xl lg:text-3xl font-bold text-slate-900">4+</div>
              <div className="text-xs lg:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Departments</div>
            </div>
            <div className="px-4">
              <div className="text-2xl lg:text-3xl font-bold text-slate-900">2,000+</div>
              <div className="text-xs lg:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE STATS GRID (Fallback for small screens) --- */}
      <div className="bg-white border-b border-slate-200 md:hidden block py-8">
        <div className="grid grid-cols-2 gap-y-6 text-center">
          <div>
            <div className="text-2xl font-bold text-slate-900">10,000+</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Citizenship</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">100+</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Complaints Solved</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">4+</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Departments</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">2,000+</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active Users</div>
          </div>
        </div>
      </div>

      {/* --- SERVICES FEATURES SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Everything the Smart City Offers, Online
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            A complete citizen-to-government digital workflow designed intentionally for maximum speed, security, and absolute transparency.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card props={{
            icon: <GoReport className="h-6 w-6 text-white" />,
            title: "Complaint Registration", 
            content: "Submit, assign, and resolve civic complaints with a transparent public workflow."
          }} />
          <Card props={{
            icon: <PiNoteBold className="h-6 w-6 text-white" />,
            title: "Public Notices", 
            content: "Stay updated about water supply, electricity grids, road updates, and infrastructure projects."
          }} />
          <Card props={{
            icon: <IoLocationOutline className="h-6 w-6 text-white" />,
            title: "GIS Issue Reporting", 
            content: "Pin the pinpoint location of ongoing issues directly on an interactive map matrix."
          }} />
          <Card props={{
            icon: <IoNotificationsSharp className="h-6 w-6 text-white" />,
            title: "Instant Notifications", 
            content: "Get notified via SMS or Email the exact moment your request status moves forward."
          }} />
          <Card props={{
            icon: <MdOutlineTrackChanges className="h-6 w-6 text-white" />,
            title: "Real-Time Tracking", 
            content: "Follow every internal stage of your request parameters with live operational updates."
          }} />
          <Card props={{
            icon: <MdContactEmergency className="h-6 w-6 text-white" />,
            title: "Emergency Contacts", 
            content: "Instantly access essential regional lines connecting with police, emergency medicine, or fire hazard units."
          }} />
        </div>
      </div>

      {/* --- PUBLIC NOTICES SECTION --- */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-slate-800 pb-6 flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tight">Public Notices</h2>
            <button className="text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
              View All Notices &rarr;
            </button>
          </div>
          {/* Notice contents or placeholders would render elegantly here */}
          <div className="py-8 text-slate-400 text-sm italic">
            No new urgent notices posted at this time. Check back later for updates.
          </div>
        </div>
      </div>

    </div>
  );
};

export default Herosec;