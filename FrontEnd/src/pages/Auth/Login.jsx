import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/login",
        loginData
      );

      // Pass token up to state orchestrator
      login(res.data.token);

      toast.success("Welcome back! Login Successful.");
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Invalid email or password parameters"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 font-sans antialiased text-slate-800">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 shadow-xl p-8 transition-all">
        
        {/* --- IDENTITY SECTION --- */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-500 mt-1.5">
            Log in to access your secure Smart City dashboard
          </p>
        </div>

        {/* --- LOGIN FORM SUBMISSION INTERFACE --- */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Block */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
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
                value={loginData.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 p-3 text-sm text-slate-800 shadow-sm outline-none transition-all focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password Block */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Password
              </label>
              {/* Optional UI Slot: Add Forgot Password anchor here if needed later */}
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <FiLock />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="••••••••"
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

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 rounded-lg font-semibold text-sm text-white flex items-center justify-center gap-2 shadow-md transition-all ${
              isLoading
                ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
                : "bg-[#003893] hover:bg-[#002c73] active:scale-[0.99] shadow-[#003893]/10 cursor-pointer"
            }`}
          >
            {isLoading ? (
              <>
                <FiLoader className="animate-spin text-base" /> Authenticating...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* --- INTERMEDIARY DIVIDER --- */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-slate-200" />
          <span className="mx-3 text-slate-400 text-xs font-bold tracking-widest uppercase">OR</span>
          <hr className="flex-1 border-slate-200" />
        </div>

        {/* --- STRATEGIC THIRD PARTY HANDLERS --- */}
        <button
          type="button"
          disabled={isLoading}
          className="w-full h-12 flex items-center justify-center gap-3 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 bg-white shadow-sm hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle size={18} />
          Continue with Google
        </button>

        {/* --- SIGNUP ROUTING LINK --- */}
        <div className="text-center mt-8 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            Don't have an account yet?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-[#003893] font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;