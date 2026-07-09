import React, { useEffect } from "react";
import { FaArrowLeft,  } from "react-icons/fa6";
import { FiBriefcase, FiMapPin, FiUser, FiPaperclip } from "react-icons/fi";

const Review = ({ formData, prevStep }) => {
  const handleSubmit = () => {
    // Backend API hook pipeline integration target
    console.log(formData);
    alert("Complaint Submitted Successfully to the Municipal Registry!");
  };

  // Memory lifecycle hook: Cleans up local preview references when leaving the UI
  useEffect(() => {
    const objectUrls = formData.images?.map((image) => URL.createObjectURL(image)) || [];
    return () => {
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [formData.images]);

  // Small inline component for clean metadata list rows
  const DataRow = ({ label, value, fallback = "Not Specified" }) => (
    <div className="flex flex-col py-1">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-medium text-slate-800 mt-0.5">{value || fallback}</span>
    </div>
  );

  return (
    <div className="font-sans text-slate-800 animate-fadeIn">
      {/* --- SECTION TITLE HEADER --- */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Review Complaint Summary
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Verify your data records thoroughly before transmission. Submitted records generate official state tracking parameters.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* --- BLOCK 1: ISSUE DETAILS --- */}
        <div className="bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2.5">
            <FiBriefcase className="text-[#003893] text-base" />
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Departmental & Issue Data</h3>
          </div>
          
          <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <DataRow label="Category" value={formData.category} />
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Severity Level</span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold mt-1 ${
                formData.severity === "High" 
                  ? "bg-rose-50 text-rose-700 border border-rose-200" 
                  : formData.severity === "Low" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}>
                {formData.severity || "Medium"}
              </span>
            </div>
            <div className="sm:col-span-2 border-t border-slate-50 pt-3">
              <DataRow label="Complaint Title" value={formData.title} />
            </div>
            <div className="sm:col-span-2 border-t border-slate-50 pt-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Detailed Description</span>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed bg-slate-50/50 p-3 rounded-lg border border-slate-100 whitespace-pre-line">
                {formData.description}
              </p>
            </div>
          </div>
        </div>

        {/* --- BLOCK 2: LOCATION & EVIDENCE --- */}
        <div className="bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2.5">
            <FiMapPin className="text-[#003893] text-base" />
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Geographic Context & Evidence</h3>
          </div>
          
          <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <DataRow label="Ward Jurisdiction" value={formData.ward} />
            <DataRow label="Area / Landmark" value={formData.area} />
            <div className="sm:col-span-2 border-t border-slate-50 pt-3">
              <DataRow label="Site Address Details" value={formData.address} />
            </div>
            <div className="border-t border-slate-50 pt-3 font-mono">
              <DataRow label="Latitude Coordinates" value={formData.latitude} />
            </div>
            <div className="border-t border-slate-50 pt-3 font-mono">
              <DataRow label="Longitude Coordinates" value={formData.longitude} />
            </div>

            {/* Evidence Image Strip Rendering */}
            {formData.images?.length > 0 && (
              <div className="sm:col-span-2 border-t border-slate-100 pt-4 mt-2">
                <div className="flex items-center gap-1.5 text-slate-700 mb-3">
                  <FiPaperclip className="text-slate-400 text-sm" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Attached Field Photos ({formData.images.length})</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative aspect-video w-full rounded-lg border border-slate-200 overflow-hidden bg-slate-50 shadow-sm">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Evidence snapshot ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- BLOCK 3: PERSONAL METRICS --- */}
        <div className="bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2.5">
            <FiUser className="text-[#003893] text-base" />
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Complainant Registry Metadata</h3>
          </div>
          
          <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <DataRow label="Full Name" value={formData.fullName} />
            <DataRow label="Contact Phone Line" value={formData.phone} />
            <DataRow label="Email Address" value={formData.email} />
            <DataRow label="Target Municipality" value={formData.municipality || "Kathmandu Metropolitan"} />
            <div className="sm:col-span-2 border-t border-slate-50 pt-3">
              <DataRow label="Preferred Correspondence Channel" value={formData.preferredContact === "Phone" ? "Voice Call / SMS Alerts" : "Official Email Thread"} />
            </div>
          </div>
        </div>

      </div>

      {/* --- FORM ACTION CONTROLS FOOTER --- */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-100">
        <button
          onClick={prevStep}
          className="h-11 px-6 rounded-lg font-semibold text-sm border border-slate-200 hover:border-slate-300 active:bg-slate-50 text-slate-600 flex items-center gap-2 transition-all cursor-pointer"
        >
          <FaArrowLeft className="text-xs" /> Back
        </button>

        <button
          onClick={handleSubmit}
          className="h-11 px-8 rounded-lg font-semibold text-sm bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white flex items-center gap-2 shadow-md shadow-emerald-600/10 transition-all cursor-pointer"
        >
          <FaCheckCircle className="text-xs" /> Submit Formal Complaint
        </button>
      </div>
    </div>
  );
};

export default Review;