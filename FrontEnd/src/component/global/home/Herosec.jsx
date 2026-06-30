import React from "react";
import { FaSearch } from "react-icons/fa";

const Herosec = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden font-serif">
      {/* Background Image */}
      <img
        src="https://marditreknepal.com/wp-content/uploads/2025/05/Mountaintop-Temple-with-Prayer-Flags.webp"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight">
          Your City, Your Services,
        </h1>

        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#DC143C] font-bold">
          One Portal
        </h2>

        {/* Search Box */}
        <form className="w-full flex justify-center mt-8 sm:mt-10">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
            <input
              type="text"
              placeholder="Search your services..."
              className="w-full rounded-lg border border-white bg-white/10 backdrop-blur-sm py-3 sm:py-4 pl-5 pr-14 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC143C]"
            />

            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#DC143C] hover:scale-110 transition"
            >
              <FaSearch className="text-xl sm:text-2xl" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Herosec;