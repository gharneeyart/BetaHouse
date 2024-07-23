import React, { useState } from 'react';
import Google from '../Images/icon_google.png';
import { useAuth } from '../contexts/Auth';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember me"
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear error on change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear error on change
  };

  const handleRememberMeChange = () => {
    setRememberMe(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address.");
        valid = false;
      }
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.trim().length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    }

    if (!valid) return; 

    try {
      setLoading(true);
      const data = await login(email, password);
      setLoading(false);

      if (data) {
        
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(data)); 
        } else {
          sessionStorage.setItem('user', JSON.stringify(data)); 
        }
        navigate("/");
      } else {
        setPasswordError("Login failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setPasswordError(err.message || "An error occurred during login.");
      setLoading(false);
    }
  };

  return (
    <div className='backgs flex  h-full md:h-screen lg:h-full'>
      <div className="max-w-full lg:w-[47%] flex flex-col justify-center items-center py-16 md:py-20 px-20">
        <div className="w-[330px] md:w-[650px] lg:w-[482px] flex flex-col gap-y-8">
          <div className="lg:hidden w-[215.66px] h-[47.21px] font-poppins flex items-center">
            <span className='bg-[#3D9970] font-bold text-[23.61px] rounded-full p-2 mr-3 text-white'>BH</span>
            <span className='font-medium text-[28.33px] text-white'>BetaHouse</span>
          </div>
          <div>
            <h1 className='text-[24px] md:text-[28px] font-semibold text-white lg:text-[#181A20D1]'>Welcome Back to BetaHouse!</h1>
            <p className='text-white lg:text-[#181A20D1]'>Let's get started by filling out the information below.</p>
          </div>
          <div>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1.5">
                  <label className='font-medium text-white lg:text-[#181A20D1]'>Email</label>
                  <input
                    type="email"
                    placeholder='Enter your Email'
                    className={`border-[2.5px] w-[330px] md:w-full lg:w-[480px] h-14 rounded py-3.5 px-5 outline-none ${emailError ? 'border-red-500' : ''}`}
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <label className='font-medium text-white lg:text-[#181A20D1]'>Password</label>
                  <input
                    type="password"
                    placeholder='Enter your Password'
                    className={`border-[2.5px] w-[330px] md:w-full lg:w-[480px] h-14 rounded py-3.5 px-5 outline-none ${passwordError ? 'border-red-500' : ''}`}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordError && <p className='text-red-500 text-sm'>{passwordError}</p>}
                </div>
              </div>
              <div className="flex gap-x-20 md:gap-x-96 lg:gap-x-52">
                <div className="flex gap-x-3 items-center">
                  <input 
                    type="checkbox" 
                    className='bg-[#3D9970] h-5 w-5 rounded-md' 
                    checked={rememberMe} 
                    onChange={handleRememberMeChange} 
                  />
                  <label className='font-medium text-white lg:text-black'>Remember me</label>
                </div>
                <Link to='/forgotpassword'><span className='text-[#EC5E5E]'>Forgot password?</span></Link>
              </div>
              <button
                type="submit"
                className={`bg-[#3D9970] w-[330px] md:w-full lg:w-[480px] rounded-2xl h-16 text-[22px] text-[#FFFFFF] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3.5 justify-center items-center">
              <div className="flex items-center w-[330px] lg:w-[411px]">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                <span className="mx-4 text-white lg:text-[#4F4E4E] font-semibold">or</span>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
              </div>
              <button className='w-[330px] md:w-full lg:w-[480px] rounded-2xl border-2 border-white lg:border-black h-16 flex justify-center items-center gap-x-2.5'>
                <img src={Google} alt="Google logo" />
                <span className='text-[22px] text-white lg:text-black'>Continue with Google</span>
              </button>
            </div>
            <div>
              <p className='text-lg text-center text-white lg:text-[#716F6F]'>
                New User? <Link to='/signup' className='text-blue-500 lg:text-[#3D9970]'>Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="backg w-[53%] py-8 px-14 hidden lg:block">
        <div className="w-[215.66px] h-[47.21px] font-poppins flex items-center">
          <span className='bg-[#3D9970] font-bold text-[23.61px] rounded-full p-2 mr-3 text-white'>BH</span>
          <span className='font-medium text-[28.33px] text-white'>BetaHouse</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
