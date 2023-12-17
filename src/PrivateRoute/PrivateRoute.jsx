import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)

   if(loading) {
      return <div className="text-center bg-lime-700"><span className="loading loading-spinner loading-lg"></span></div>
   }

   if(user?.email) {
      return children
   }
   return <Navigate to='/login'></Navigate>
};

PrivateRoute.propTypes = {
   children: PropTypes.node 
}

export default PrivateRoute;