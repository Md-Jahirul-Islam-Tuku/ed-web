import React from 'react';
import google from '../../src/google.png';
import github from '../../src/github.png'
import { Link } from 'react-router-dom';

const Login = () => {
   return (
      <div className="w-[40%]">
         <div className="card shadow-2xl bg-base-100 top-40 left-96">
            <h1 className='text-4xl font-bold mt-4'>Please Log in</h1>
            <div className="p-5">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" className="input input-bordered" />
                  <div className='text-left'>
                     Forgot password? <button className="btn btn-link no-underline hover:underline font-bold">reset</button>
                  </div>
                  <div className='text-left'>
                     Don't have an account? Please <Link to='/register' className="no-underline hover:underline font-bold text-blue-600">Register</Link>
                  </div>
               </div>
               <div className="form-control mt-2">
                  <button className="btn btn-warning">Login</button>
               </div>
               <div className="form-control mt-2">
                  <button className="btn btn-outline btn-dark my-2"><img className='h-6 mr-2' src={google} alt="" /> Log in with Google</button>
               </div>
               <div className="form-control mt-2">
                  <button className="btn btn-outline btn-dark"><img className='h-6 mr-2' src={github} alt="" /> Log in with Github</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;