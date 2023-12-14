import { useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import OuServices from "./OurServices/OuServices";
import { useEffect } from "react";

const Home = () => {
   const [services, setServices] = useState([])

   useEffect(() => {
      fetch('/services.json')
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setServices(data)
         })
   }, [])

   return (
      <div>
         {/* banner area  */}
         <Banner></Banner>
         {/* about us  */}
         <AboutUs></AboutUs>
         {/* our services  */}
         <div className="py-14 lg:py-28">
            {/* header content  */}
            <HeaderTitle></HeaderTitle>
            {/* card services  */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-12">
               {
                  services.map(service  => <OuServices key={service._id} service={service} />)
               }
            </div>
            {/* button  */}
            <div className="text-center">
               <button className='text-lg font-semibold text-[#FF3811] rounded-md border px-5 py-3 border-[#FF3811]'>More Services</button>
            </div>
         </div>
      </div>
   );
};

export default Home;