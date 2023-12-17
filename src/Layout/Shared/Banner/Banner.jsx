import banner_img from '../../../assets/images/banner/4.jpg'
import PropTypes from 'prop-types'; // ES6

const Banner = ({text}) => {
   return (
      <div className='pb-14 lg:pb-24'>
         {/* banner container  */}
         <div className='h-full md:h-[300px] relative'>
            <div className='h-full'>
               <img className='w-full h-full rounded-lg object-left-bottom' src={banner_img} alt="" />
            </div>
            {/* text content  */}
            <div className='absolute left-24 top-[45%]'>
               <h1 className='text-4xl text-white font-bold'>{text}</h1>
            </div>
            <div className='h-12 w-40 flex items-center justify-center rounded-t-[15px] bg-[#FF3811] absolute bottom-0 left-[45%]'>
               <p className='text-xl text-white font-semibold'>hollow</p>
            </div>
         </div>
      </div>
   );
};

Banner.propTypes = {
   text: PropTypes.string.isRequired
}

export default Banner;