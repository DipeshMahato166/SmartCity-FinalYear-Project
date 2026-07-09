import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step1Issue = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Simple validation block to enforce clean inputs before advancing
  const isFormValid = formData.category && formData.title.trim() && formData.description.trim();

  return (
    <div className="font-sans text-slate-800 animate-fadeIn">
      {/* --- SECTION TITLE HEADER --- */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Issue Details
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Provide comprehensive details regarding the civic issue to ensure it is routed to the correct department.
        </p>
      </div>

      {/* --- FORM INPUT MATRIX --- */}
      <div className="space-y-6">
        
        {/* Input: Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-semibold text-slate-700 mb-2">
            Complaint Category <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm text-slate-800 shadow-sm transition-all duration-200 outline-none appearance-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 cursor-pointer"
            >
              <option value="" disabled>Select Departmental Category</option>
              <option value="Road">Roads & Infrastructure</option>
              <option value="Water">Water Supply & Sewage</option>
              <option value="Garbage">Waste Management & Sanitation</option>
              <option value="Electricity">Electricity Grid Authority</option>
              <option value="Street Light">Street Light & Public Utilities</option>
            </select>
            {/* Custom Dropdown Arrow Icon Overlay */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Input: Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-semibold text-slate-700 mb-2">
            Complaint Title <span className="text-rose-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="e.g., Deep pothole near main intersection causing gridlock"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
          />
        </div>

        {/* Input: Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-semibold text-slate-700 mb-2">
            Detailed Description <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="description"
            rows="5"
            name="description"
            placeholder="Please specify structural points, duration of the issue, and immediate safety hazards if any exist..."
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 transition-all duration-200 outline-none resize-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
          />
        </div>

        {/* Input: Severity Matrix */}
        <div className="flex flex-col">
          <label htmlFor="severity" className="text-sm font-semibold text-slate-700 mb-2">
            Urgency / Severity Level
          </label>
          <div className="relative">
            <select
              id="severity"
              name="severity"
              value={formData.severity || "Medium"} // Fallback handling standard medium priority defaults
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm text-slate-800 shadow-sm transition-all duration-200 outline-none appearance-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 cursor-pointer"
            >
              <option value="Low">🟢 Low (Routine maintenance required)</option>
              <option value="Medium">🟡 Medium (Disruptive, needs timely assessment)</option>
              <option value="High">🔴 High (Safety hazard, immediate attention mandatory)</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

      </div>

      {/* --- FORM FOOTER ACTION SYSTEM --- */}
      <div className="flex justify-end mt-12 pt-6 border-t border-slate-100">
        <button
          onClick={nextStep}
          disabled={!isFormValid}
          className={`h-11 px-8 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-md transition-all duration-200 group ${
            isFormValid
              ? "bg-[#003893] hover:bg-[#002c73] text-white active:scale-95 cursor-pointer shadow-[#003893]/10"
              : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
          }`}
        >
          Continue
          <FaArrowRight className={`text-xs transition-transform ${isFormValid && "group-hover:translate-x-1"}`} />
        </button>
      </div>
    </div>
  );
};

export default Step1Issue;