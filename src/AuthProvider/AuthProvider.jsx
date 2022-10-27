import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   
   const userRegister = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser)
   }
   const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }
   const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
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
         setLoading(false);
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
      setUser,
      googleLogin,
      githubLogin
   };
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
};

export { AuthProvider, AuthContext };