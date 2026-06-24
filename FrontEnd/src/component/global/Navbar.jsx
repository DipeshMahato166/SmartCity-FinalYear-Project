import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className='flex justify-between items-center p-5 bg-[#003893] shadow-2xl text-white font-serif '>
            <div className=''>
  
                <span className='text-4xl font-bold'>Smart</span> <span className='text-4xl font-bold text-[#DC143C]'>City</span><br />
                <span className='text-2xl flex justify-center items-center'>Portal</span>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-10'>
                    <Link to="/">
                        <li className='hover:text-[#DC143C] '>Home</li>
                    </Link>
                    <Link to="/services">
                        <li className='hover:text-[#DC143C] '>Services</li>
                    </Link>
                    <Link to="/event">
                        <li className='hover:text-[#DC143C] '>Events</li>
                    </Link>
                    <Link to="/gallery">
                        <li className='hover:text-[#DC143C] '>Gallery</li>
                    </Link>
                    <Link to="/emergency">
                        <li className='hover:text-[#DC143C] '>Emergency</li>
                    </Link>
                    <li className='hover:text-[#DC143C] '>About Us</li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <Link to="/login">
                    <Button props={{ text: "Login" }} />
                </Link>
                <Link to="/signup">
                    <Button props={{ text: "Signup", bg: "bg-[#DC143C]" }} />
                </Link>

            </div>
        </div>

    )
}

export default Navbar