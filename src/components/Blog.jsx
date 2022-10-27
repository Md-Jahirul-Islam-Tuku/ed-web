import React from 'react';
import blogLogo from '../../src/assets/images/Blog_Logo.png';

const Blog = () => {
  return (
    <div className='my-10'>
      <img className='h-24 mx-auto' src={blogLogo} alt="..." />
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-bold">
          What is cors?
        </div>
        <div className="collapse-content">
          <p className=' border-t-2 pt-2 border-t-slate-400'><strong>Cross-Origin Resource Sharing</strong> (CORS) is an <strong>HTTP</strong>-header based mechanism that allows a server to indicate any <strong>origins</strong> (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-bold">
          Why are you using firebase? What other options do you have to implement authentication?
        </div>
        <div className="collapse-content">
          <p className=' border-t-2 pt-2 border-t-slate-400'><strong>Firebase</strong> is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets us focus on our app instead of implementing custom authentication, web sockets or database connections. <strong>Google Analytics for Firebase allows us to track our users' journey through realtime and custom reporting.</strong> As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing us to track our users across a wide range of devices.</p>
          <p>I have implement another <strong>OKTA</strong> authentication system.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-bold">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <p className=' border-t-2 pt-2 border-t-slate-400'>The private route component is similar to the public route, the only change is that <strong>redirect URL and authenticate condition.</strong> If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-bold">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p className=' border-t-2 pt-2 border-t-slate-400'>Node. js is <strong>an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.</strong> Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.</p>
          <p><strong>Node. js</strong> takes a different approach. <strong>It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;