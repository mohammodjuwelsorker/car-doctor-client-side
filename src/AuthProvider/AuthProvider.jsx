import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from './../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   // sign Up function
   const createUser = (email, pass) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, pass)
   }

   // sign in function 
   const login = (email, pass) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, pass)
   }

   // google login function 
   const googleLogin = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   // profile update function 
   const profileUpdate = (name) => {
      setLoading(true)
      updateProfile(auth.currentUser, {
         displayName: name,
      })
         .then(() => {
            console.log('profile updated')
         })
         .catch(err => console.log(err))
   }

   // observer user 
   useEffect(()=> {

      const unSubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user)
         setLoading(false)
         if(user) {
            console.log('user is have this page')
         }
         else {
            console.log('user is not have this page')
         }
      })

      return () => {
         unSubscribe()
      }
   }, [])



   const authInfo = {
      user,
      loading,
      createUser,
      login,
      googleLogin,
      profileUpdate,
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

AuthProvider.propTypes = {
   children: PropTypes.node 
}

export default AuthProvider;