import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        
        <div className='flex justify-between items-center p-5 bg-[#0e2841] shadow-2xl text-white font-serif'> 
            <div className=''>
                <img src="./" alt="" />
                <span className='text-4xl font-bold'>Smart</span> <span className='text-4xl font-bold text-yellow-400'>City</span><br />
                <span className='text-2xl flex justify-center items-center'>Portal</span>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-10'>
                    <li className='hover:text-yellow-400 '>Home</li>
                    <li className='hover:text-yellow-400 '>Services</li>
                    <li className='hover:text-yellow-400 '>Events</li>
                    <li className='hover:text-yellow-400 '>Gallery</li>
                    <li className='hover:text-yellow-400 '>About Us</li>
                    <li className='hover:text-yellow-400 '>Emergency</li>
                </ul>
            </div>
            <div className='flex gap-4'>
              <Button props={{text:"Login", bg:"bg-green-400"}}/>
              <Button props={{text:"Signup", bg:"bg-yellow-500"}}/>
               
            </div>
        </div>
        
    )
}

export default Navbar