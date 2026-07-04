const Step3Personal = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Personal Details
      </h2>

      <p className="text-gray-500 mb-8">
        Please provide your contact information so we can update you about your complaint.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div>
          <label className="block mb-2 font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#003893] outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#003893] outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#003893] outline-none"
          />
        </div>

        {/* Municipality */}
        <div>
          <label className="block mb-2 font-medium">
            Municipality
          </label>

          <input
            type="text"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            placeholder="Kathmandu Metropolitan"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#003893] outline-none"
          />
        </div>

      </div>

      {/* Preferred Contact */}
      <div className="mt-8">
        <label className="block mb-3 font-medium">
          Preferred Contact Method
        </label>

        <div className="flex gap-8">

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="preferredContact"
              value="Phone"
              checked={formData.preferredContact === "Phone"}
              onChange={handleChange}
            />

            Phone
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="preferredContact"
              value="Email"
              checked={formData.preferredContact === "Email"}
              onChange={handleChange}
            />

            Email
          </label>

        </div>
      </div>

      {/* Declaration */}
      <div className="mt-8">

        <label className="flex items-start gap-3">

          <input
            type="checkbox"
            name="agree"
            checked={formData.agree || false}
            onChange={handleChange}
            className="mt-1"
          />

          <span className="text-gray-600">
            I confirm that the information provided is accurate and I understand
            that submitting false complaints may result in appropriate action.
          </span>

        </label>

      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-10">

        <button
          onClick={prevStep}
          className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100"
        >
          ← Back
        </button>

        <button
          onClick={nextStep}
          className="bg-[#003893] text-white px-8 py-3 rounded-lg hover:bg-[#002c73]"
        >
          Preview →
        </button>

      </div>

    </>
  );
};

export default Step3Personal;