import PropTypes from 'prop-types'; // ES6
import { MdOutlineClose } from "react-icons/md";


const BookingRow = ({booking, handleDelete, handleOrderConfirm}) => {

   const {_id, img, service, price, date, status} = booking;

   

   return (
      <tr className='border-0'>
         <th>
            <button onClick={() => handleDelete(_id)} className='w-10 h-10 flex items-center justify-center rounded-full bg-[#444444] text-2xl text-white'><MdOutlineClose/></button>
         </th>
         <td>
            <div className="flex items-center gap-3">
               {/* img content */}
               <div className='w-40 h-40'>
                  {img && <img className='w-full h-full rounded-lg' src={img} alt="" />}
               </div>
               {/* text content  */}
               <div>
                  <h1 className='text-xl text-[#444] font-semibold'>{service}</h1>
               </div>
            </div>
         </td>
         <td>
            <p className='text-xl text-[#444] font-semibold'>${price}</p>
         </td>
         <td>
            <span className='text-xl text-[#2D2D2D] font-medium'>{date}</span>
         </td>
         <td>
            { status == 'confirm' ?   <button  className='text-xl font-bold text-[#29B170] border-2 border-[#29B170] rounded-lg px-4 py-2 '>Confirm</button> 
            :
            <button onClick={() => handleOrderConfirm(_id)}  className='text-xl font-semibold text-white bg-[#FF3811] px-4 py-2 rounded-md'>Pending</button>
            }
         </td>
      </tr>
   );
};

BookingRow.propTypes = {
   handleDelete: PropTypes.func,
   handleOrderConfirm: PropTypes.func,
   booking: PropTypes.object,
}

export default BookingRow;