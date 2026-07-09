import React, { useState } from "react";
import ProgressBar from "../../pages/Complaint/ProgessBar";
import Step1Issue from "../../pages/Complaint/Step1Issue";
import Step2Location from "../../pages/Complaint/Step2Location";
import Step3Personal from "../../pages/Complaint/Step3Personal";
import Review from "../../pages/Complaint/Review";

const ComplaintWizard = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    severity: "",

    ward: "",
    area: "",
    address: "",
    latitude: "",
    longitude: "",
    images: [],

    fullName: "",
    phone: "",
    email: "",
    preferredContact: "Phone",
  });

  const nextStep = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans py-12  md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADER TITLE CONTEXT --- */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight pt-10">
            Complaint Section
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
            Please fill out the step-by-step framework below to lodge your formal concern directly with city administration.
          </p>
        </div>

        {/* --- MAIN FORM CONTAINER --- */}
        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/50 overflow-hidden transition-all duration-300">
          
          {/* Progress Section Housing */}
          <div className="bg-slate-50/70 border-b border-slate-100 p-6 md:p-8">
            <ProgressBar step={step} />
          </div>

          {/* Dynamic Component Steps Window */}
          <div className="p-6 md:p-10 min-h-[400px] flex flex-col justify-between">
            <div className="animate-fadeIn duration-200">
              {step === 1 && (
                <Step1Issue
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                />
              )}

              {step === 2 && (
                <Step2Location
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 3 && (
                <Step3Personal
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 4 && (
                <Review
                  formData={formData}
                  prevStep={prevStep}
                />
              )}
            </div>
          </div>

        </div>

        {/* --- SECURITY & COMPLIANCE FOOT-NOTE --- */}
        <div className="text-center mt-6">
          <p className="text-xs text-slate-400">
            🔒 This is an encrypted connection. All data fields comply with municipal privacy regulations.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ComplaintWizard;