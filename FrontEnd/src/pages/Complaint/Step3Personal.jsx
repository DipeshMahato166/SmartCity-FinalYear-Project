import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiUser, FiPhone, FiMail, FiMap } from "react-icons/fi";

const Step3Personal = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Comprehensive step-3 field validation block
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormValid =
    formData.fullName?.trim() &&
    formData.phone?.trim() &&
    isEmailValid &&
    formData.agree;

  return (
    <div className="font-sans text-slate-800 animate-fadeIn">
      {/* --- SECTION TITLE HEADER --- */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Personal Details
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Please provide verified contact info so city officials can reach out for clarifications or status updates.
        </p>
      </div>

      {/* --- INPUT FIELDS MATRIX --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Full Name Input */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-sm font-semibold text-slate-700 mb-2">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <FiUser />
            </span>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g., Rajesh Hamal"
              className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
            />
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold text-slate-700 mb-2">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm font-mono font-medium">
              <FiPhone />
            </span>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98XXXXXXXX"
              className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
            />
          </div>
        </div>

        {/* Email Address Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <FiMail />
            </span>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@domain.com"
              className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
            />
          </div>
        </div>

        {/* Municipality Field */}
        <div className="flex flex-col">
          <label htmlFor="municipality" className="text-sm font-semibold text-slate-700 mb-2">
            Municipality
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <FiMap />
            </span>
            <input
              id="municipality"
              type="text"
              name="municipality"
              value={formData.municipality || ""}
              onChange={handleChange}
              placeholder="e.g., Kathmandu Metropolitan City"
              className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
            />
          </div>
        </div>

      </div>

      {/* --- PREFERRED CONTACT CHANNEL MULTI-GRID --- */}
      <div className="mt-8 p-4 bg-slate-50 border border-slate-200/60 rounded-xl">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Preferred Contact Method
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-slate-700 font-medium cursor-pointer select-none">
            <input
              type="radio"
              name="preferredContact"
              value="Phone"
              checked={formData.preferredContact === "Phone"}
              onChange={handleChange}
              className="w-4 h-4 text-[#003893] border-slate-300 focus:ring-[#003893]/20 focus:ring-2 cursor-pointer"
            />
            Voice Call / SMS
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-700 font-medium cursor-pointer select-none">
            <input
              type="radio"
              name="preferredContact"
              value="Email"
              checked={formData.preferredContact === "Email"}
              onChange={handleChange}
              className="w-4 h-4 text-[#003893] border-slate-300 focus:ring-[#003893]/20 focus:ring-2 cursor-pointer"
            />
            Official Email Correspondence
          </label>
        </div>
      </div>

      {/* --- LEGAL DISCLOSURE DECLARATION BOX --- */}
      <div className="mt-8 border border-slate-200 bg-white rounded-xl p-4 shadow-sm">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree || false}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:ring-2 cursor-pointer"
          />
          <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            I hereby certify that all declarations and supporting media data objects provided here are correct. I understand that lodging fraudulent civil declarations can trigger regulatory municipal actions.
          </span>
        </label>
      </div>

      {/* --- FOOTER FORM NAVIGATION LINKS --- */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-100">
        <button
          onClick={prevStep}
          className="h-11 px-6 rounded-lg font-semibold text-sm border border-slate-200 hover:border-slate-300 active:bg-slate-50 text-slate-600 flex items-center gap-2 transition-all cursor-pointer"
        >
          <FaArrowLeft className="text-xs" /> Back
        </button>

        <button
          onClick={nextStep}
          disabled={!isFormValid}
          className={`h-11 px-8 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-md transition-all group ${
            isFormValid
              ? "bg-[#003893] hover:bg-[#002c73] text-white active:scale-95 cursor-pointer shadow-[#003893]/10"
              : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
          }`}
        >
          Preview Summary
          <FaArrowRight className={`text-xs transition-transform ${isFormValid && "group-hover:translate-x-1"}`} />
        </button>
      </div>
    </div>
  );
};

export default Step3Personal;