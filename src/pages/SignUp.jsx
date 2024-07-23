import React, {useState} from 'react'
import Google from '../Images/icon_google.png'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router";
import { useAuth } from '../contexts/Auth';
import { toast } from "react-toastify";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {signup } = useAuth();

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
      };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
      };
      const handleAgreeTermsChange = (e) => {
        setAgreeTerms(e.target.checked);
    };

    const validate = () => {
        const errors = {};
        if (!firstName) errors.firstName = "First name is required";
        if (!lastName) errors.lastName = "Last name is required";
        const emailRegex = /\S+@\S+\.\S+/;
        if (!email) errors.email = "Email is required";
        else if (!emailRegex.test(email)) errors.email = "Invalid email address";
        if (!password) errors.password = "Password is required";
        else if (password.trim().length < 6) errors.password = "Password must be at least 6 characters";
        if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
        if (!agreeTerms) errors.agreeTerms = "You must agree to the terms of service and privacy policy";
        return errors;
      };

      
          const handleSubmit = async (e) => {
            e.preventDefault();
            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
              setErrors(validationErrors);
              return;
            }
            try {
              setLoading(true); 
              const data = await signup(firstName, lastName, email, password);
              setLoading(false);
              if (data.success) {
                navigate("/");
              } else {
                setErrors({ form: data.message || "Registration failed" });
              }
            } catch (err) {
              setErrors({ form: err.message || "An unexpected error occurred" });
              setLoading(false);
            }
          };
        
    
  return (
    <div className='backgs flex  h-full md:h-screen lg:h-full'>
        <div className="max-w-full  lg:w-[47%] flex flex-col justify-center items-center py-16 px-20  ">
            <div className="w-[350px] md:w-[650px] lg:w-[482px] flex flex-col gap-y-8">
            <div className="lg:hidden w-[215.66px] h-[47.21px] font-poppins flex items-center">
          <span className='bg-[#3D9970] font-bold text-[23.61px] rounded-full p-2 mr-3 text-white'>BH</span>
          <span className='font-medium text-[28.33px] text-white'>BetaHouse</span>
        </div>
                <div className="w-[350px] md:w-full lg:w-[455px]">
                    <h1 className='text-[20px] md:text-[27.5px] font-semibold text-white lg:text-[#181A20D1]'>Join our community of home seekers and explore the possibilities that await. </h1>
                    <p className='text-white lg:text-[#181A20D1]'>Lets get started by filling out the information below</p>
                </div>
                <div className="">
                        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                            {errors.form && <div className="text-red-500">{errors.form}</div>}
                            <div className="flex flex-col gap-y-4">
                                <div className="flex flex-col md:flex-row gap-x-11 gap-y-1.5 md:gap-y-0">
                                    <div className="flex flex-col gap-y-1.5">
                                        <label className='font-medium text-white lg:text-[#181A20D1]'>First Name</label>
                                        <input type="text" placeholder='Enter Name' className='border-[2.5px] w-[350px] md:w-[300px] lg:w-[218px] h-12 rounded py-3.5 px-3 outline-none' onChange={handleFirstNameChange} />
                                        {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
                                    </div>
                                    <div className="flex flex-col gap-y-1.5">
                                        <label className='font-medium text-white lg:text-[#181A20D1]'>Last Name</label>
                                        <input type="text" placeholder='Enter Name' className='border-[2.5px] w-[350px] md:w-[300px] lg:w-[218px] h-12 rounded py-3.5 px-3 outline-none' onChange={handleLastNameChange} />
                                        {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1.5">
                                    <label className='font-medium text-white lg:text-[#181A20D1]'>Email</label>
                                    <input type="text" placeholder='Enter your Email' className='border-[2.5px] w-[350px] md:w-full lg:w-[480px] h-12 rounded py-3.5 px-5 outline-none' onChange={handleEmailChange} />
                                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                                </div>
                                <div className="flex flex-col gap-y-1.5">
                                    <label className='font-medium text-white lg:text-[#181A20D1]'>Password</label>
                                    <input type="password" placeholder='Enter your Password' className='border-[2.5px] w-[350px] md:w-full lg:w-[480px] h-12 rounded py-3.5 px-5 outline-none' onChange={handlePasswordChange} />
                                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                                </div>
                                <div className="flex flex-col gap-y-1.5">
                                    <label className='font-medium text-white lg:text-[#181A20D1]'>Confirm Password</label>
                                    <input type="password" placeholder='Confirm your Password' className='border-[2.5px] w-[350px] md:w-full lg:w-[480px] h-12 rounded py-3.5 px-5 outline-none' onChange={handleConfirmPasswordChange} />
                                    {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
                                </div>
                            </div>
                            <div className="">
                                <input type="checkbox" className='h-5 w-5 rounded-md' onChange={handleAgreeTermsChange} />
                                <label className='font-medium text-white lg:text-[#181A20D1] ml-2'>I agree to <span className='text-[#3D9970]'>Terms of Service</span> and <span className='text-[#3D9970]'>Privacy Policies</span></label>
                                {errors.agreeTerms && <div className="text-red-500">{errors.agreeTerms}</div>}
                            </div>
                            <button className='bg-[#3D9970] w-[350px] md:w-full lg:w-[482px] rounded-2xl h-16 text-[22px] text-[#FFFFFF]' type="submit" onSubmit={handleSubmit} disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
                        </form>
                    </div>
                <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-3.5">
                        {/* <button className='bg-[#3D9970] w-[350px] md:w-full lg:w-[482px] rounded-2xl h-16 text-[22px] text-[#FFFFFF]' onClick={handleSubmit}>Sign up</button> */}
                        <div className="flex items-center w-[330px] md:w-[411px] justify-center">
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                            <span className="mx-4 text-white lg:text-[#4F4E4E] font-semibold">or</span>
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                        </div>
                        <button className='w-[350px] md:w-full lg:w-[482px] rounded-2xl border border-white lg:border-black h-16 flex justify-center items-center gap-x-2.5 text-white lg:text-black'>
                            <img src={Google} alt="" />
                            <span className='text-[22px]'>Continue with Google</span>
                        </button>
                    </div>
                    <div className="">
                        <p className='text-lg text-center text-white lg:text-[#716F6F]'>Already have an account?  <Link to='/login' className='text-[#3D9970]'>Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="backg hidden lg:block w-[53%] py-8 px-14">
            <div className="w-[215.66px] h-[47.21px] font-poppins">
                <span className='bg-[#3D9970] font-bold text-[23.61px] rounded-full p-2 mr-3 text-white'>BH</span>
                <span className='font-medium text-[28.33px] text-white text-center'>BetaHouse</span>
            </div>
        </div>
    </div>
  )
}

export default SignUp;