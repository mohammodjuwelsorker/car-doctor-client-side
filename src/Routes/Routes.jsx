import {createBrowserRouter,} from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/Home/Home";
import About from "../Layout/About/About";
import Services from "../Layout/Services/Services";
import Blog from "../Layout/Blog/Blog";
import Contact from "../Layout/Contact/Contact";
import Login from "../Layout/Login/Login";
import SignUp from "../Layout/SignUp/SignUp";
import CheckOut from "../Layout/CheckOut/CheckOut";
import Bookings from "../Layout/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import axios from "axios";

// default withCredentials all route use 
axios.defaults.withCredentials = true;

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     errorElement: <ErrorPage></ErrorPage>,
     children: [
      {
         path:'/',
         element: <Home></Home>
      },
      {
         path:'/about',
         element: <About></About>
      },
      {
         path:'/services',
         element: <Services></Services>
      },
      {
         path: '/blog',
         element: <Blog></Blog>
      },
      {
         path: '/contact',
         element: <Contact></Contact>
      },
      {
         path:'/login',
         element: <Login></Login>
      },
      {
         path:'/signUp',
         element: <SignUp></SignUp>
      },
      {
         path:'/checkOut/:id',
         element:<PrivateRoute><CheckOut/></PrivateRoute>,
         loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
         path:'/bookings',
         element:<PrivateRoute><Bookings/></PrivateRoute>,
      },
     ]
   },
]);

export default router
 