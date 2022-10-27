import React from 'react';
import google from '../../src/assets/images/google.png';
import github from '../../src/assets/images/github.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Login = () => {
  const { userLogin, setLoading, setUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [wrong, setWrong] = useState(null);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    userLogin(email, password)
      .then(result => {
        const user = result.user;
        if (user?.emailVerified) {
          setUser(user);
          form.reset();
          toast.custom((t) => (
            <div
              className={`bg-success text-lg text-white font-semibold px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-enter' : 'animate-leave'
                }`}
            >
              👋 Successfully ! Log in.
            </div>
          ));
          navigate(from, { replace: true });
        }
        else {
          setWrong(null)
          toast.custom((t) => (
            <div
              className={`bg-error text-lg text-white font-semibold px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-enter' : 'animate-leave'
                }`}
            >
              Please verify email. Otherwise, can't Log in.
            </div>
          ));
        }
      }).catch(error => {
        console.error(error)
        return setWrong(error.message);
      }).finally(() => setLoading(false))
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        navigate(from, { replace: true });
        toast.custom((t) => (
          <div
            className={`bg-success text-lg text-white font-semibold px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-enter' : 'animate-leave'
              }`}
          >
            👋 Successfully ! Log in.
          </div>
        ));
      })
      .catch(error => console.error(error))
  }
  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(result.user);
        navigate(from, { replace: true });
        toast.custom((t) => (
          <div
            className={`bg-success text-lg text-white font-semibold px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-enter' : 'animate-leave'
              }`}
          >
            👋 Successfully ! Log in.
          </div>
        ));
      })
      .catch(error => console.error(error))
  }

  return (
    <div className="lg:w-[40%]">
      <div className="card shadow-2xl bg-base-100 my-10 lg:my-[10vh] lg:left-[20vw]">
        <h1 className='text-4xl font-bold mt-4'>Please Log in</h1>
        <form onSubmit={handleLogin} className="p-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input required name='email' type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input required name='password' type="password" placeholder="password" className="input input-bordered" />
            <div className='text-left font-semibold'>
              Forgot password? <button className="btn btn-link no-underline hover:underline font-bold">reset</button>
            </div>
            <div className='text-left font-semibold text-error'>
              {wrong}
            </div>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-warning font-bold text-lg">Log in</button>
          </div>
        </form>
        <div className="px-5">
          <div className="form-control mt-2">
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-dark my-2"><img className='h-6 mr-2' src={google} alt="" /> Log in with Google</button>
          </div>
          <div className="form-control mt-2">
            <button onClick={handleGithubLogin} className="btn btn-outline btn-dark"><img className='h-6 mr-2' src={github} alt="" /> Log in with Github</button>
          </div>
          <div className='my-5 font-bold'>
            Don't have an account? Please <Link to='/register' className="no-underline hover:underline font-bold text-blue-600">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;