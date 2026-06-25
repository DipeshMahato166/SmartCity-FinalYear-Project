import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-[#003893] shadow-lg text-white font-serif'>
            <div className='flex justify-between items-center px-8 py-4'>
                
                {/* Logo */}
                <div>
                    <span className='text-4xl font-bold'>Smart</span>
                    <span className='text-4xl font-bold text-[#DC143C]'>City</span>
                    <br />
                    <span className='text-xl flex justify-center'>
                        Portal
                    </span>
                </div>

                {/* Menu */}
                <ul className='flex items-center gap-8 text-lg'>
                    <li>
                        <Link to="/" className='hover:text-[#DC143C] transition duration-300'>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/services" className='hover:text-[#DC143C] transition duration-300'>
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link to="/event" className='hover:text-[#DC143C] transition duration-300'>
                            Events
                        </Link>
                    </li>

                    <li>
                        <Link to="/gallery" className='hover:text-[#DC143C] transition duration-300'>
                            Gallery
                        </Link>
                    </li>

                    <li>
                        <Link to="/emergency" className='hover:text-[#DC143C] transition duration-300'>
                            Emergency
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className='hover:text-[#DC143C] transition duration-300'>
                            About Us
                        </Link>
                    </li>
                </ul>

                {/* Buttons */}
                <div className='flex gap-4'>
                    <Link to="/login">
                        <Button props={{ text: "Login" }} />
                    </Link>

                    <Link to="/signup">
                        <Button
                            props={{
                                text: "Signup",
                                bg: "bg-[#DC143C]"
                            }}
                        />
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar