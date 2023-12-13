import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { FaGoogle } from "react-icons/fa";
import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';

const Footer = () => {
   return (
      <footer className="footer p-10 bg-[#151515] text-base-content">
         <div className='w-full sm:w-[283px]'>
           <img src={logo} className='mb-4' alt="" />
            <p className='text-base text-[#E8E8E8] font-normal mb-5'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>

            {/* social icons  */}
            <div className='flex items-center  text-lg font-normal text-white space-x-2'>
               <Link className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-700'><FaGoogle /></Link>
               <Link className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-700'><CiInstagram /></Link>
               <Link className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-700'><CiTwitter /></Link>
               <Link className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-700'><CiLinkedin /></Link>
            </div>
         </div> 
         <nav>
            <header className="text-xl font-semibold text-white md:mb-10">About</header> 
            <Link className="link link-hover text-base text-[#F3F3F3]">Home</Link>
            <Link className="link link-hover text-base text-[#F3F3F3]">About</Link>
            <Link className="link link-hover text-base text-[#F3F3F3]">Contact</Link>
         </nav> 
         <nav>
            <header className="text-xl font-semibold text-white md:mb-10">Company</header> 
            <p className="text-base text-[#F3F3F3]">Why Car Doctor</p>
            <p className="text-base text-[#F3F3F3]">About</p>
         </nav> 
         <nav>
         <nav>
            <header className="text-xl font-semibold text-white md:mb-10">Support</header> 
            <p className="text-base text-[#F3F3F3]">Support Center</p>
            <p className="text-base text-[#F3F3F3]">Feedback</p>
            <p className="text-base text-[#F3F3F3]">Accesbility</p>
         </nav> 
         </nav>
      </footer>
   );
};

export default Footer;