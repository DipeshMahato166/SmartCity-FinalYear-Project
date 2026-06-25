import React from 'react'
import Button from '../Button'
import { FaSearch } from "react-icons/fa";


const Herosec = () => {
  return (
    <div className="relative flex justify-center items-center font-serif">
      <img
        src="https://marditreknepal.com/wp-content/uploads/2025/05/Mountaintop-Temple-with-Prayer-Flags.webp"
        alt="Hero"
        className="h-screen w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute z-10 flex flex-col items-center gap-y-4 p-6 pt-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center">
          Your City, Your Services,
        </h1>

        <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#DC143C] text-center">
          One Portal
        </h1>

        <form>
  <div className="relative w-72 md:w-96 lg:w-125 mt-10">
    <input
      type="text"
      placeholder="Search your services..."
      className="w-full border border-white text-white bg-transparent rounded-lg pl-4 pr-12 py-3 focus:outline-none"
    />

    <button
      type="submit"
      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#DC143C]"
    >
      <FaSearch size={30} />
    </button>
  </div>
</form>
      </div>
    </div>
  )
}

export default Herosec