import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../src/google.png';
import github from '../../src/github.png'

const Register = () => {
  return (
    <form className="w-[40%]">
      <div className="card shadow-2xl bg-base-100 top-24 left-96">
        <h1 className='text-4xl font-bold mt-4'>Please Register</h1>
        <div className="p-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="full name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="photo url" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" />
            <div className='text-left'>
              Forgot password? <button className="btn btn-link no-underline hover:underline font-bold">reset</button>
            </div>
            <div className='text-left'>
              Have you an account? Please <Link to='/login' className="no-underline hover:underline font-bold text-blue-600">Log in</Link>
            </div>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-warning">Register</button>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-outline btn-dark my-2"><img className='h-6 mr-2' src={google} alt="" /> Register with Google</button>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-outline btn-dark"><img className='h-6 mr-2' src={github} alt="" /> Register with Github</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;