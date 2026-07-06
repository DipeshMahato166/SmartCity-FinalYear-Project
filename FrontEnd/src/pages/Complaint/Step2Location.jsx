import { useState } from "react";

const Step2Location = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [previewImages, setPreviewImages] = useState([]);

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

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData({
          ...formData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    setFormData({
      ...formData,
      images: files,
    });

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-2">
        Location & Evidence
      </h2>

      <p className="text-gray-500 mb-8">
        Tell us where the issue occurred and upload supporting images.
      </p>

      <div className="space-y-6">

        {/* Ward */}
        <div>
          <label className="font-medium">
            Ward Number
          </label>

          <select
            name="ward"
            value={formData.ward}
            onChange={handleChange}
            className="w-full mt-2 border rounded-lg p-3"
          >
            <option value="">Select Ward</option>
            {[...Array(32)].map((_, i) => (
              <option key={i + 1}>
                Ward {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Area */}
        <div>
          <label className="font-medium">
            Area / Landmark
          </label>

          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full mt-2 border rounded-lg p-3"
            placeholder="Eg. Near Bus Park"
          />
        </div>

        {/* Address */}
        <div>
          <label className="font-medium">
            Detailed Address
          </label>

          <textarea
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full mt-2 border rounded-lg p-3"
            placeholder="Street name or nearby location"
          />
        </div>

        {/* Location */}
        <div>
          <button
            onClick={getCurrentLocation}
            type="button"
            className="bg-[#003893] text-white px-5 py-3 rounded-lg"
          >
            📍 Use Current Location
          </button>
        </div>

        {/* Coordinates */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="font-medium">
              Latitude
            </label>

            <input
              type="text"
              value={formData.latitude}
              readOnly
              className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">
              Longitude
            </label>

            <input
              type="text"
              value={formData.longitude}
              readOnly
              className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
            />
          </div>
        </div>

        {/* Map Placeholder */}
        <div>
          <label className="font-medium">
            Map Preview
          </label>

          <div className="mt-2 h-64 border-2 border-dashed rounded-lg flex justify-center items-center text-gray-400">
            Google Map will be added here
          </div>
        </div>

        {/* Upload Images */}
        <div className="">
          <label className="font-medium pr-2  ">
            Upload Evidence:
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-3 border rounded-lg pl-3 cursor-pointer "
          />
        </div>

        {/* Image Preview */}
        {previewImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="preview"
                className="h-32 w-full object-cover rounded-lg border"
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={prevStep}
          className="px-8 py-3 rounded-lg border"
        >
          ← Back
        </button>

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

export default Step2Location;