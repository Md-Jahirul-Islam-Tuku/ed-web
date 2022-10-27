import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
   if (loading) {
      return <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-violet-400 ml-[40%] mt-16"></div>;
   }
   if (user || user?.uid) {
      return children;
   }
   return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;