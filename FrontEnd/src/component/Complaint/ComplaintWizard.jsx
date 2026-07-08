import { useState } from "react";
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
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-30">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <ProgressBar step={step} />

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
  );
};

export default ComplaintWizard;