import React from 'react'
import { FaSearch } from "react-icons/fa";
import Button from '../common/Button';
import { FaArrowRight } from "react-icons/fa6";
import { GoReport } from "react-icons/go";
import { Link } from 'react-router-dom';




const Herosec = () => {
  return (
    <>
      <div className="relative flex justify-center items-center font-serif">
        <img
          src="https://marditreknepal.com/wp-content/uploads/2025/05/Mountaintop-Temple-with-Prayer-Flags.webp"
          alt="Hero"
          className="h-screen w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute z-10 flex flex-col items-center gap-y-4 p-6 pt-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center font-bold">
            Smart City Service Portal
          </h1>
          <div>
            <p className="text-2xl  text-slate-300 text-center">
              Digital government services for transparent,
              efficient and citizen-centric governance. <br />It can be acess from anywhere.
            </p>
          </div>


          <div className="relative w-72 md:w-96 lg:w-125 mt-10 flex gap-20 justify-center ">
            <Link to="/signup">
            <button className='bg-blue-500 h-10 w-40 rounded-lg  text-white flex justify-center items-center gap-2'>Get Started <FaArrowRight /></button>
            </Link>
            <Link to="/complaintwizard">
              <button className='bg-white h-10 w-40 rounded-lg flex justify-center items-center gap-2'><GoReport />File Complaint </button>
            </Link>
          </div>


        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full bg-white z-20 shadow-lg">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-20 py-6">
    
    <div className="flex flex-col items-center justify-center">
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        10000+
      </span>
      <span className="text-sm sm:text-base text-[#164a79] text-center">
        Total Citizenship
      </span>
    </div>

    <div className="flex flex-col items-center justify-center">
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        100+
      </span>
      <span className="text-sm sm:text-base text-[#164a79] text-center">
        Complaints Solved
      </span>
    </div>

    <div className="flex flex-col items-center justify-center">
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        4+
      </span>
      <span className="text-sm sm:text-base text-[#164a79] text-center">
        Departments
      </span>
    </div>

    <div className="flex flex-col items-center justify-center">
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        2000+
      </span>
      <span className="text-sm sm:text-base text-[#164a79] text-center">
        Active Users
      </span>
    </div>

  </div>
</div>
    </>
  )
}

export default Herosec