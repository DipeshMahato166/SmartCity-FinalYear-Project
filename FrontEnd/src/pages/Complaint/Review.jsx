const Review = ({ formData, prevStep }) => {

  const handleSubmit = () => {
    // Backend API will be added later
    console.log(formData);

    alert("Complaint Submitted Successfully!");
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Review Complaint
      </h2>

      <p className="text-gray-500 mb-8">
        Please review your complaint carefully before submitting.
      </p>

      <div className="space-y-8">

        {/* Issue Details */}
        <div className="border rounded-xl p-6 shadow-sm">

          <h3 className="text-xl font-semibold text-[#003893] mb-5">
            Issue Details
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <p className="text-gray-500 text-sm">Category</p>
              <p className="font-medium">{formData.category}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Severity</p>
              <p className="font-medium">{formData.severity}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-500 text-sm">Complaint Title</p>
              <p className="font-medium">{formData.title}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-500 text-sm">Description</p>
              <p>{formData.description}</p>
            </div>

          </div>

        </div>

        {/* Location */}
        <div className="border rounded-xl p-6 shadow-sm">

          <h3 className="text-xl font-semibold text-[#003893] mb-5">
            Location & Evidence
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <p className="text-gray-500 text-sm">Ward</p>
              <p>{formData.ward}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Area</p>
              <p>{formData.area}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-500 text-sm">Address</p>
              <p>{formData.address}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Latitude</p>
              <p>{formData.latitude}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Longitude</p>
              <p>{formData.longitude}</p>
            </div>

          </div>

          {/* Images */}

          {formData.images.length > 0 && (

            <div className="mt-6">

              <h4 className="font-semibold mb-3">
                Uploaded Images
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {formData.images.map((image, index) => (

                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt="Complaint"
                    className="rounded-lg h-32 w-full object-cover border"
                  />

                ))}

              </div>

            </div>

          )}

        </div>

        {/* Personal */}

        <div className="border rounded-xl p-6 shadow-sm">

          <h3 className="text-xl font-semibold text-[#003893] mb-5">
            Personal Details
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <p className="text-gray-500 text-sm">Full Name</p>
              <p>{formData.fullName}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p>{formData.phone}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p>{formData.email}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Municipality</p>
              <p>{formData.municipality}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Preferred Contact
              </p>

              <p>{formData.preferredContact}</p>
            </div>

          </div>

        </div>

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
          onClick={handleSubmit}
          className="bg-[#16A34A] text-white px-8 py-3 rounded-lg hover:bg-green-700"
        >
          Submit Complaint
        </button>

      </div>

    </>
  );
};

export default Review;