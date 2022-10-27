import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../src/google.png';
import github from '../../src/github.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const Register = () => {
  const { userRegister, auth, verifyEmail } = useContext(AuthContext);
  const handleRegister= e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    userRegister(email, password)
    .then(result => {
      console.log(result.user);
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      });
      handleVerifyEmail();
      toast.custom((t) => (
        <div
          className={`bg-secondary text-lg font-semibold px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-enter' : 'animate-leave'
            }`}
        >
          {`${name} 👋 Please verify your email.`} 
        </div>
      ));
      form.reset()
    }).catch(error => console.error(error))
  }
  const handleVerifyEmail = () => {
    verifyEmail().then(()=>{}).catch(error => console.error(error))
  }

  return (
    <form onSubmit={handleRegister} className="w-[40%]">
      <div className="card shadow-2xl bg-base-100 top-24 left-96">
        <h1 className='text-4xl font-bold mt-4'>Please Register</h1>
        <div className="p-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input name='name' type="text" placeholder="full name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name='photo' type="text" placeholder="photo url" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" />
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-warning font-bold text-lg">Register</button>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-outline btn-dark my-2"><img className='h-6 mr-2' src={google} alt="" /> Register with Google</button>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-outline btn-dark"><img className='h-6 mr-2' src={github} alt="" /> Register with Github</button>
          </div>
          <div className='my-3 font-bold'>
            Have you an account? Please <Link to='/login' className="no-underline hover:underline font-bold text-blue-600">Log in</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;