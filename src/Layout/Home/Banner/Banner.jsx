import banner_1 from '../../../assets/images/banner/1.jpg'
import banner_2 from '../../../assets/images/banner/2.jpg'
import banner_3 from '../../../assets/images/banner/3.jpg'
import banner_4 from '../../../assets/images/banner/4.jpg'
import banner_5 from '../../../assets/images/banner/5.jpg'
import banner_6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {
   return (
      <div className="carousel w-full h-full lg:h-[600px]">
         {/* slide 1 */}
         <div id="slide1" className="carousel-item relative w-full h-full">
            <img src={banner_1} className="w-full rounded-xl" />
            {/* content  */}
            <div className="absolute flex items-center rounded-xl md:pl-16 w-full h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
               <div className='space-y-7'>
                  <h3 className='lg:w-[463px] lg:leading-[75px] lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h3>
                  <p className='lg:w-[522px] text-lg text-white font-normal capitalize leading-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div className='flex items-center  space-x-5'> 
                     <button className='text-lg font-semibold text-white rounded-md bg-[#FF3811] px-5 py-3'>Discover More</button>
                     <button className='text-lg font-semibold text-white rounded-md border px-5 py-3'>Latest Project</button>
                  </div>
               </div>
            </div>
            {/* button here  */}
            <div className="absolute flex justify-end space-x-5  bottom-7 right-8 ">
               <a href="#slide4" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❮</a> 
               <a href="#slide2" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❯</a>
            </div>
         </div> 
         {/* slide 2 */}
         <div id="slide2" className="carousel-item relative w-full h-full">
            <img src={banner_2} className="w-full rounded-xl" />
            {/* content  */}
            <div className="absolute flex items-center rounded-xl md:pl-16 w-full h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
               <div className='space-y-7'>
                  <h3 className='lg:w-[463px] lg:leading-[75px] lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h3>
                  <p className='lg:w-[522px] text-lg text-white font-normal capitalize leading-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div className='flex items-center  space-x-5'> 
                     <button className='text-lg font-semibold text-white rounded-md bg-[#FF3811] px-5 py-3'>Discover More</button>
                     <button className='text-lg font-semibold text-white rounded-md border px-5 py-3'>Latest Project</button>
                  </div>
               </div>
            </div>
            {/* button here  */}
            <div className="absolute flex justify-end  bottom-7 right-8 ">
               <a href="#slide6" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❮</a> 
               <a href="#slide3" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❯</a>
            </div>
         </div> 
         {/* slide 3 */}
         <div id="slide3" className="carousel-item relative w-full h-full">
            <img src={banner_3} className="w-full rounded-xl" />
            {/* content  */}
            <div className="absolute flex items-center rounded-xl md:pl-16 w-full h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
               <div className='space-y-7'>
                  <h3 className='lg:w-[463px] lg:leading-[75px] lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h3>
                  <p className='lg:w-[522px] text-lg text-white font-normal capitalize leading-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div className='flex items-center  space-x-5'> 
                     <button className='text-lg font-semibold text-white rounded-md bg-[#FF3811] px-5 py-3'>Discover More</button>
                     <button className='text-lg font-semibold text-white rounded-md border px-5 py-3'>Latest Project</button>
                  </div>
               </div>
            </div>
            {/* button here  */}
            <div className="absolute flex justify-end  bottom-7 right-8 ">
               <a href="#slide5" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❮</a> 
               <a href="#slide4" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❯</a>
            </div>
         </div> 
         {/* slide 4 */}
         <div id="slide4" className="carousel-item relative w-full h-full">
            <img src={banner_4} className="w-full rounded-xl" />
            {/* content  */}
            <div className="absolute flex items-center rounded-xl md:pl-16 w-full h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
               <div className='space-y-7'>
                  <h3 className='lg:w-[463px] lg:leading-[75px] lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h3>
                  <p className='lg:w-[522px] text-lg text-white font-normal capitalize leading-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div className='flex items-center  space-x-5'> 
                     <button className='text-lg font-semibold text-white rounded-md bg-[#FF3811] px-5 py-3'>Discover More</button>
                     <button className='text-lg font-semibold text-white rounded-md border px-5 py-3'>Latest Project</button>
                  </div>
               </div>
            </div>
            {/* button here  */}
            <div className="absolute flex justify-end  bottom-7 right-8 ">
               <a href="#slide4" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❮</a> 
               <a href="#slide5" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❯</a>
            </div>
         </div> 
         {/* slide 5 */}
         <div id="slide5" className="carousel-item relative w-full h-full">
            <img src={banner_5} className="w-full rounded-xl" />
            {/* content  */}
            <div className="absolute flex items-center rounded-xl md:pl-16 w-full h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
               <div className='space-y-7'>
                  <h3 className='lg:w-[463px] lg:leading-[75px] lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h3>
                  <p className='lg:w-[522px] text-lg text-white font-normal capitalize leading-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div className='flex items-center  space-x-5'> 
                     <button className='text-lg font-semibold text-white rounded-md bg-[#FF3811] px-5 py-3'>Discover More</button>
                     <button className='text-lg font-semibold text-white rounded-md border px-5 py-3'>Latest Project</button>
                  </div>
               </div>
            </div>
            {/* button here  */}
            <div className="absolute flex justify-end  bottom-7 right-8 ">
               <a href="#slide3" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❮</a> 
               <a href="#slide6" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❯</a>
            </div>
         </div> 
         {/* slide 6 */}
         <div id="slide6" className="carousel-item relative w-full h-full">
            <img src={banner_6} className="w-full rounded-xl" />
            {/* content  */}
            <div className="absolute flex items-center rounded-xl md:pl-16 w-full h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
               <div className='space-y-7'>
                  <h3 className='lg:w-[463px] lg:leading-[75px] lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h3>
                  <p className='lg:w-[522px] text-lg text-white font-normal capitalize leading-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div className='flex items-center  space-x-5'> 
                     <button className='text-lg font-semibold text-white rounded-md bg-[#FF3811] px-5 py-3'>Discover More</button>
                     <button className='text-lg font-semibold text-white rounded-md border px-5 py-3'>Latest Project</button>
                  </div>
               </div>
            </div>
            {/* button here  */}
            <div className="absolute flex justify-end  bottom-7 right-8 ">
               <a href="#slide2" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❮</a> 
               <a href="#slide1" className="text-lg text-white flex items-center justify-center w-12 h-12 rounded-full  bg-[#FF3811]">❯</a>
            </div>
         </div> 
      </div>
   );
};

export default Banner;