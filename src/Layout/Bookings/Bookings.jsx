import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Bookings = () => {
   const {user} = useContext(AuthContext)
   // user from email convert to email's name
   const email = user?.email;
   const [bookings, setBookings] = useState([])
   
   const url = `http://localhost:5000/bookings?email=${email}`
   // get the brawer data fetch 
   useEffect(()=> {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setBookings(data)
         })
   },[url])

   return (
      <div>
         hollow bookings
         <h1>{bookings.length}</h1>
      </div>
   );
};

export default Bookings;