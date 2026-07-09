import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiMapPin, FiUploadCloud } from "react-icons/fi";

const Step2Location = ({ formData, setFormData, nextStep, prevStep }) => {
  const [previewImages, setPreviewImages] = useState([]);
  const [isLocating, setIsLocating] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData({
          ...formData,
          latitude: position.coords.latitude.toFixed(6),
          longitude: position.coords.longitude.toFixed(6),
        });
        setIsLocating(false);
      },
      () => {
        alert("Unable to retrieve your precise location.");
        setIsLocating(false);
      }
    );
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setFormData({
      ...formData,
      images: [...formData.images, ...files],
    });

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prev) => [...prev, ...previews]);
  };

  const isFormValid = formData.ward && formData.area.trim() && formData.address.trim();

  return (
    <div className="font-sans text-slate-800 animate-fadeIn">
      {/* --- SECTION HEADER --- */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Location & Evidence
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Pinpoint the exact location of the issue and submit visual proof to accelerate field inspection.
        </p>
      </div>

      {/* --- CORE STEP FORM WRAPPER --- */}
      <div className="space-y-6">
        
        {/* Row Layout: Ward & Area Landmark */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col">
            <label htmlFor="ward" className="text-sm font-semibold text-slate-700 mb-2">
              Ward Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <select
                id="ward"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm text-slate-800 transition-all outline-none appearance-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 cursor-pointer"
              >
                <option value="" disabled>Select Ward</option>
                {[...Array(32)].map((_, i) => (
                  <option key={i + 1} value={`Ward ${i + 1}`}>
                    Ward {i + 1}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 text-xs">▼</div>
            </div>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="area" className="text-sm font-semibold text-slate-700 mb-2">
              Area / Landmark <span className="text-rose-500">*</span>
            </label>
            <input
              id="area"
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm text-slate-800 outline-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
              placeholder="e.g., Adjacent to Central Bus Park main gate"
            />
          </div>
        </div>

        {/* Textarea: Detailed Address */}
        <div className="flex flex-col">
          <label htmlFor="address" className="text-sm font-semibold text-slate-700 mb-2">
            Detailed Address / Site Information <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="address"
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm text-slate-800 outline-none resize-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
            placeholder="Specify street names, neighborhood blocks, or clear static indicators..."
          />
        </div>

        {/* Location Automation Panel */}
        <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Geotag Coordinates</h4>
            <p className="text-xs text-slate-500 mt-0.5">Automate routing accuracy by binding live telemetry variables.</p>
          </div>
          <button
            onClick={getCurrentLocation}
            disabled={isLocating}
            type="button"
            className="h-10 px-4 bg-white border border-slate-200 hover:border-[#003893] active:bg-slate-50 text-slate-700 font-semibold text-xs rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap disabled:opacity-50"
          >
            <FiMapPin className={isLocating ? "animate-bounce text-rose-500" : "text-[#003893]"} />
            {isLocating ? "Fetching Telemetry..." : "Capture Current Location"}
          </button>
        </div>

        {/* Read-Only Coordinates Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Latitude</label>
            <input
              type="text"
              value={formData.latitude || "Not Specified"}
              readOnly
              className="w-full bg-slate-100 border border-slate-200 text-slate-500 rounded-lg p-3 text-sm outline-none font-mono"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Longitude</label>
            <input
              type="text"
              value={formData.longitude || "Not Specified"}
              readOnly
              className="w-full bg-slate-100 border border-slate-200 text-slate-500 rounded-lg p-3 text-sm outline-none font-mono"
            />
          </div>
        </div>

        {/* Image Attachment Upload Box */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 mb-2">Upload Evidence (Images)</label>
          <label className="border-2 border-dashed border-slate-200 hover:border-[#003893] bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors group">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-[#003893]/5 text-slate-400 group-hover:text-[#003893] transition-colors flex items-center justify-center">
              <FiUploadCloud className="text-lg" />
            </div>
            <span className="text-sm font-medium text-slate-700">Click to attach photo files</span>
            <span className="text-xs text-slate-400">Supports PNG, JPG up to 10MB formats</span>
          </label>
        </div>

        {/* Dynamic Image Galleries Block */}
        {previewImages.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {previewImages.map((img, index) => (
              <div key={index} className="relative aspect-video w-full rounded-lg border border-slate-200 overflow-hidden shadow-sm group">
                <img src={img} alt="Evidence preview" className="h-full w-full object-cover transform group-hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- ACTION SYSTEM COMPONENT BAR --- */}
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
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          }`}
        >
          Continue
          <FaArrowRight className={`text-xs transition-transform ${isFormValid && "group-hover:translate-x-1"}`} />
        </button>
      </div>
    </div>
  );
};

export default Step2Location;