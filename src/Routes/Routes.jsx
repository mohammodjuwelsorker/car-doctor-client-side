import {createBrowserRouter,} from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/Home/Home";
import About from "../Layout/About/About";
import Services from "../Layout/Services/Services";
import Blog from "../Layout/Blog/Blog";
import Contact from "../Layout/Contact/Contact";

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
     ]
   },
]);

export default router
 