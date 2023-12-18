import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";
import Swal from 'sweetalert2';
import axios from "axios";

const Bookings = () => {
   const {user} = useContext(AuthContext)
   // user from email convert to email's name
   const email = user?.email;
   const [bookings, setBookings] = useState([])
   
   const url = `http://localhost:5000/bookings?email=${email}`
   // get the brawer data fetch 
   useEffect(()=> {
      axios.get(url, )
         .then(res => {
            console.log(res.data)
            setBookings(res.data)
         })
         // .then(res => res.json())
         // .then(data => {
         //    console.log(data)
         //    setBookings(data)
         // })
   },[url])


   // delete function 
   const handleDelete = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "delete it!"
       }).then((result) => {
         if (result.isConfirmed) {
           Swal.fire({
             title: "Deleted!",
             text: "Your file has been deleted.",
             icon: "success"
           });


         //   fetch here 
         fetch(`http://localhost:5000/bookings/${id}`, {
            method:"DELETE"
         })
            .then(res => res.json())
            .then(data => {
               // console.log(data)
               if(data.deletedCount > 0) {
                  Swal.fire({
                     title: "Deleted Successfully!",
                     text: "You clicked the button!",
                     icon: "success"
                  });

                  // remaining bookings 
                  const remaining = bookings.filter(booking => booking._id !== id)
                  setBookings(remaining)
               }
            })
         }
       });
   }

   // order confirm function 
   const handleOrderConfirm = (id) => {
      console.log(id)

      //   fetch here 
      fetch(`http://localhost:5000/bookings/${id}`, {
         method:"PATCH",
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({status: 'confirm'})
      })
         .then(res => res.json())
         .then(data => {
            // console.log(data)
            if(data.modifiedCount > 0) {
               /*********updated**********/

               //remaining bookings 
               const remaining = bookings.filter(booking => booking._id !== id)
               const updated = bookings.find(booking => booking._id === id)
               updated.status = 'confirm'
               console.log(updated)
               const newUpdated = [updated, ...remaining]
               setBookings(newUpdated)

            }
         })
   }

   return (
      <div>
         <div className="overflow-x-auto">
            <table className="table">
               <tbody>
                  {
                     bookings.map(booking => <BookingRow key={booking._id} booking={booking}
                     handleDelete={handleDelete}
                     handleOrderConfirm={handleOrderConfirm}
                     ></BookingRow>)
                  }
               </tbody>               
            </table>
         </div>
      </div>
   );
};

export default Bookings;