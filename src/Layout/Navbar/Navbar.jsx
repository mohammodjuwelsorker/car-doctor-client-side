import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import logo from '../../assets/logo.svg'

const Navbar = () => {

   const navItems = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/service'>Service</NavLink></li>
      <li><NavLink to='/blog'>Blog</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
   </>
   return (
      <div className="navbar bg-base-100 py-10">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navItems}
               </ul>
            </div>
            {/* logo  */}
            <div>
               <Link to='/'>
                  <img src={logo} alt="" />
               </Link>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal flex items-center space-x-5 text-lg text-[#444] font-semibold">
               {navItems}
            </ul>
         </div>
         <div className="navbar-end space-x-7">
            <div className="flex items-center space-x-5 text-2xl font-bold">
               <button><AiOutlineShopping /></button>
               <button><CiSearch/></button>
            </div>
            <button className="text-lg font-semibold border px-7 py-3 text-[#FF3811] rounded-lg border-[#FF3811]">Appointment</button>
         </div>
      </div>
   );
};

export default Navbar;