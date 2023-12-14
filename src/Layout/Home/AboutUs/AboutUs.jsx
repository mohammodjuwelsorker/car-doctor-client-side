import parson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const AboutUs = () => {
   return (
      <div className='py-14 lg:py-28'>
         <div className="md:flex lg:space-x-16">
            {/* image content  */}
            <div className='relative mb-6 md:mb-0'>
               <img  src={parson} className='w-full md:w-11/12' alt="" />
               <img src={parts} className='w-full md:w-[327px] h-full md:h-[332px] border-8 border-[rgba(0, 0, 0, 0.20) 0%] md:absolute bottom-0 right-0' alt="" />
            </div>
            {/* text content  */}
            <div>
               <h4 className='text-xl text-[#FF3811] font-bold mb-5'>About Us</h4>
               <h3 className='lg:w-[385px] text-5xl font-bold text-[#151515] mb-7'>We are qualified & of experience in this field</h3>
               <p className='text-base text-[#737373] font-normal capitalize mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
               <p className='text-base text-[#737373] font-normal capitalize mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
               <button className='text-lg font-semibold text-white rounded-md bg-[#FF3811] px-5 py-3'>Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;