const Step1Issue = ({ formData, setFormData, nextStep }) => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-2">
        Issue Details
      </h2>

      <p className="text-gray-500 mb-8">
        Tell us about your complaint.
      </p>

      <div className="space-y-5">

        <div>
          <label className="font-medium">
            Complaint Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option value="">Select Category</option>
            <option>Road</option>
            <option>Water</option>
            <option>Garbage</option>
            <option>Electricity</option>
            <option>Street Light</option>
          </select>
        </div>

        <div>
          <label className="font-medium">
            Complaint Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Severity
          </label>

          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

      </div>

      <div className="flex justify-end mt-10">
        <button
          onClick={nextStep}
          className="bg-[#003893] text-white px-8 py-3 rounded-lg"
        >
          Next →
        </button>
      </div>
    </>
  );
};

export default Step1Issue;