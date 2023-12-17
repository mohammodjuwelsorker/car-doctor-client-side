import PropTypes from 'prop-types'; // ES6
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const OuServices = ({service,}) => {
   const {img, title, price, _id} = service
   return (
      <div className="card p-6 border border-[#E8E8E8] space-y-5">
         <img src={img} className='w-full rounded-lg h-full lg:h-[208.008px]' alt="Shoes" />
         <h2 className="text-2xl text-[#444] font-bold">{title}</h2>
         <div className="flex items-center justify-between">
            <p className='text-xl text-[#FF3811] font-semibold'>Price: $<span>{price}</span></p>
            <button className='text-2xl text-[#FF3811]'><Link to={`/checkOut/${_id}`}><FaArrowRightLong ></FaArrowRightLong></Link></button>
         </div>
      </div>
   );
};

OuServices.propTypes = {
   service: PropTypes.object.isRequired,
   // location: PropTypes.node
}

export default OuServices;