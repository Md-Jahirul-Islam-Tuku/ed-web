import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   console.log(user);
   const [loading, setLoading] = useState(true);

   const userRegister = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser)
   }
   const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   const logOut = () => {
      setLoading(true);
      return signOut(auth)
   }
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, recentUser => {
         if (recentUser === null || recentUser.emailVerified) {
            setUser(recentUser);
         }
         setLoading(true);
      });
      return () => {
         unsubscribe();
      }
   }, [])
   const value = {
      userRegister,
      auth,
      verifyEmail,
      user,
      logOut,
      loading,
      userLogin,
      setLoading,
      setUser
   };
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
};

export { AuthProvider, AuthContext };