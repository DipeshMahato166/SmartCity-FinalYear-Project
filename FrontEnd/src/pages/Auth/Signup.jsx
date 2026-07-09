import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    // Frontend safety guard: Enforce password minimum length
    if (formData.password.length < 6) {
      toast.warn("Password must be at least 6 characters long.");
      return;
    }

    // New validation guard: Verify passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      // Mapping separate names into a single string if your backend schema requires "name"
      const payload = {
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email,
        password: formData.password,
      };

      const res = await axios.post(
        "http://localhost:8080/api/users/register",
        payload
      );

      console.log(res.data);
      toast.success("Registration Successful! Please sign in.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 font-sans antialiased text-slate-800">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 shadow-xl p-8 transition-all">
        
        {/* --- IDENTITY HEADER --- */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Create Account
          </h1>
          <p className="text-sm text-slate-500 mt-1.5">
            Register to join the Smart City digital registry
          </p>
        </div>

        {/* --- REGISTRATION FORM --- */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Two Column Layout: First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Input: First Name */}
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                First Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <FiUser />
                </span>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Rajesh"
                  className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Input: Last Name */}
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Last Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <FiUser />
                </span>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Hamal"
                  className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>

          {/* Input: Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <FiMail />
              </span>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Input: Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <FiLock />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-11 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 outline-none transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          </div>

          {/* Input: Confirm Password */}
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <FiLock />
              </span>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-11 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 outline-none transition-colors cursor-pointer"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 rounded-lg font-semibold text-sm text-white flex items-center justify-center gap-2 shadow-md transition-all mt-2 ${
              isLoading
                ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
                : "bg-[#003893] hover:bg-[#002c73] active:scale-[0.99] shadow-[#003893]/10 cursor-pointer"
            }`}
          >
            {isLoading ? (
              <>
                <FiLoader className="animate-spin text-base" /> Registering Account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* --- INTERMEDIARY DIVIDER --- */}
        <div className="flex items-center my-5">
          <hr className="flex-1 border-slate-200" />
          <span className="mx-3 text-slate-400 text-xs font-bold tracking-widest uppercase">OR</span>
          <hr className="flex-1 border-slate-200" />
        </div>

        {/* --- GOOGLE IDENTITY OVERLAY --- */}
        <button
          type="button"
          disabled={isLoading}
          className="w-full h-12 flex items-center justify-center gap-3 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 bg-white shadow-sm hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle size={18} />
          Continue with Google
        </button>

        {/* --- REDIRECT ARCHITECTURE --- */}
        <div className="text-center mt-6 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            Already have a profile verified?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#003893] font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;