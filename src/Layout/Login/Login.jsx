import { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';


const Login = () => {
   
   const {login, googleLogin} = useContext(AuthContext)
   const [showPassword, setShowPassword] = useState(!true)
   const location = useLocation()
   const navigate = useNavigate()
   // console.log(location.state)

   // login function 
   const handleLogin = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const pass = form.pass.value;

      console.log(email, pass)

      login(email, pass)
         .then(result => {
            console.log( "user Login",result.user)

            const user = {email}
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
               console.log(res.data)
               if(res.data) {
                  // navigate here 
                  navigate(location?.state ? location?.state : '/')
               }
            })

         })
         .catch(err => console.log(err))
   }

   // social login function 
   const handleSocialLogin = (socialLogin) => {
      console.log('click')

      socialLogin()
         .then(result => {
            console.log("Social login: ", result.user)
            
            // navigate here 
            navigate(location?.state ? location?.state : '/')
         })
         .catch(err => console.log(err))
   }

   console.log(showPassword)

   return (
      <div className="flex items-center lg:space-x-16 pb-12 lg:pb-16">
          <div className="w-1/2">
               <img src={img} alt="" />
            </div>
            <div className='w-1/2 border-2 border-[#D0D0D0] rounded-xl p-16 space-y-7'>
               <form onSubmit={handleLogin} className="space-y-7">
                  <h1 className='text-4xl text-[#444] text-center font-semibold mb-8 lg:mb-12'>Login</h1>
                  <div className="form-control space-y-3 ">
                     <label className="label">
                        <span className="text-lg text-[#444] font-semibold">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control space-y-3">
                     <label className="label">
                        <span className="text-lg text-[#444] font-semibold">Password</span>
                     </label>
                     <div className='w-full relative'>
                        <input type={showPassword ? "password" : "text"} name='pass' placeholder="password" className="input input-bordered w-full" required />
                        <button type='button' className='absolute top-3 right-5 text-2xl font-semibold'
                        onClick={() => setShowPassword(!showPassword)}>{
                           showPassword ? <FiEye/> : <FaRegEyeSlash/>
                        }</button>
                     </div>
                  </div>
                  <div className="form-control mt-6">
                     <button type='submit' className="py-4 text-xl text-white w-full bg-[#FF3811] font-semibold rounded-xl">Sign In</button>
                  </div>
               </form>
               {/* social login  */}
               <div className='flex flex-col items-center justify-center space-y-7'>
                  <h1 className='text-lg text-[#444] font-medium'>Or Sign In with</h1>
                  {/* social icons  */}
                  <div className='flex items-center gap-3 '>
                     <button onClick={()=> handleSocialLogin(googleLogin)} className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center text-[#0F9D58] text-xl'><FaGoogle></FaGoogle></button>
                     <button className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center text-[#0F9D58] text-xl'><FaLinkedinIn></FaLinkedinIn></button>
                     <button className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center text-[#0F9D58] text-xl'><FaFacebookF /></button>
                  </div>
               </div>
               {/* sign up button  */}
               <div className='text-center'>
                  <button className='text-lg text-[#737373] font-normal'>Have an account? <Link to='/signUp' className='text-[#FF3811] font-semibold'>Sign Up</Link></button>
               </div>
            </div>  
      </div>
   );
};

export default Login;
