import React from 'react'
import Button from '../Button'

const Herosec = () => {
    return (
      <div className="relative flex justify-center items-center font-serif">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8r5XYUAG02hkn-sC4kTtoe4oyoprOjKC8kmfnxcCkw&s=10"
    alt="Hero"
    className="h-screen w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="absolute z-10 flex flex-col items-center gap-y-4 p-6">
    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center">
      Your City, Your Services,
    </h1>

    <h1 className="text-4xl md:text-6xl lg:text-7xl text-yellow-500 text-center">
      One Portal
    </h1>

    <form>
      <div className="flex flex-col md:flex-row gap-5 pt-10">
        <input
          type="text"
          placeholder="Search your services..."
          className="border text-white w-72 md:w-96 lg:w-125 rounded-lg pl-4 py-3"
        />
        <Button props={{ text: "Submit", bg: "bg-green-500" }} />
      </div>
    </form>
  </div>
</div>
    )
}

export default Herosec