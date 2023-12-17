import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import { useContext } from "react";
import { AuthContext } from './../../AuthProvider/AuthProvider';


const CheckOut = () => {
   const services = useLoaderData()
   const {price, title, _id} = services;
   const {user} = useContext(AuthContext)


   // order submit handle function 
   const handleOrderSubmit = (e) => {
      e.preventDefault()
      const form = e.target;
      const firstName = form.firstName.value;
      const lastName = form.lastName.value;
      const yourPhone = form.yourPhone.value;
      const yourEmail = form.yourEmail.value;
      const price = form.price.value;
      const date = form.date.value;
      const textArea = form.textArea.value;
      // console.log(firstName, lastName, yourPhone,yourEmail,price, date, textArea)

      const orderConfirm = {
         service_id: _id,
         service: title,
         firstName: firstName,
         lastName: lastName,
         phone: yourPhone,
         email: yourEmail,
         price: price,
         date: date,
         description: textArea
      }

      // create the data the post server side from mongodb 
      fetch('http://localhost:5000/booking', {
         method: "POST",
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(orderConfirm)

      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data.insertedId) {
               console.log('successfully inserted data')
            }
         })
         .catch(err => console.log(err))
   }

   return (
      <div>
         {/* banner  */}
         <Banner text='Check Out'></Banner>

         {/* form container */}
         <div className='pb-14 lg:pb-28'>
            <div className='bg-[#F3F3F3] p-8 lg:p-24'>
                  <form onSubmit={handleOrderSubmit} className="space-y-7">
                     {/* box one  */}
                     <div className="sm:flex items-center gap-6">
                        <div className="form-control w-full">
                           <input type="text" name='firstName' placeholder='First Name' className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                           <input type="text" name='lastName' placeholder='Last Name' className="input input-bordered" required />
                        </div>
                     </div>
                     {/* box two  */}
                     <div className="sm:flex items-center gap-6">
                        <div className="form-control w-full">
                           <input type='text' name='yourPhone' placeholder='Your Phone' className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                           <input type='email' name='yourEmail' defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                     </div>
                     {/* box three  */}
                     <div className="sm:flex items-center gap-6">
                        <div className="form-control w-full">
                           <input type='text' name='price' defaultValue={`Price: ${price}`} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                           <input type='date' name='date' placeholder='Your Email' className="input input-bordered" required />
                        </div>
                     </div>
                     {/* text area  */}
                     <div className="w-full h-full md:h-[250px]">
                        <textarea placeholder='Your Message' name='textArea' className="w-full h-full focus:outline-none p-6 rounded-xl"></textarea>
                     </div>
                     {/* order button  */}
                     <div className="form-control mt-6">
                        <button type='submit' className="py-4 text-xl text-white w-full bg-[#FF3811] font-semibold rounded-xl">Order Confirm</button>
                     </div>
                  </form>
               </div> 
         </div>
      </div>
   );
};

export default CheckOut;