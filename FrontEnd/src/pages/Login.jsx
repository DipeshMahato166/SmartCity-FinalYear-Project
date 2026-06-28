import React, { useState } from 'react'


const Login = () => {
     const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // console.log(`${e.target.name}: ${e.target.value}`)
    }
    
    const handleSubmit = (e) => {
        
        
        e.preventDefault()
        console.log(loginData);
    }
  return (
     <div className="h-screen grid place-items-center font-serif">
            <form
                onSubmit={handleSubmit}
                className="w-100 p-8 h-100 border-[#E5E7EB] shadow-2xl flex flex-col justify-center items-center gap-10 rounded-2xl "
            >
                <h1 className='font-extrabold text-4xl flex justify-center items-center  text-[#003893]'>Login </h1>
                <input
                    onChange={handleChange}
                    className="p-2 w-full rounded-2xl border h-10"
                    type="text"
                    placeholder="Enter Email..."
                    name="username"
                    value={loginData.email}
                    required
                />
                <input
                    onChange={handleChange}
                    className="p-2 w-full rounded-2xl border h-10"
                    type="password"
                    placeholder="Enter Password..."
                    name="password"
                    value={loginData.password}
                    required
                />
                <button
                    className="p-2 px-4 border w-full h-10 rounded-2xl text-white  bg-[#DC143C] cursor-pointer hover:bg-[#B01030]"
                    type="submit">
                        Submit

                </button>


            </form>
        </div>
  )
}

export default Login