import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const { user } = props;
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();  // To navigate after successful login

  function handleusername(evt) {
    setusername(evt.target.value);
  }

  function handlepassword(evt) {
    setpassword(evt.target.value);
  }

  function handlelogin() {
    const foundUser = user.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      // Redirect to the dashboard or another page after successful login
      navigate('/dashboard',{state:{user:username}});
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                onChange={handleusername}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                value={username}
                required
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              </div>
              <input
                onChange={handlepassword}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                value={password}
              />
            </div>

            <div className="mt-8">
              <button
                onClick={handlelogin}
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                Login
              </button>
            </div>

            <div className="mt-4 flex items-center w-full text-center">
              <a href="#" className="text-xs text-gray-500 capitalize text-center w-full">
                Don&apos;t have an account yet?
                <span className="text-blue-700">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
