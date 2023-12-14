import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

const Main = () => {
   return (
      <div>
         <div className='max-w-screen-xl mx-auto px-4 md:px-0'>
            <Navbar></Navbar>
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main;