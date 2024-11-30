import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const { user, setuser } = props;
  const [name, setname] = useState('');
  const [pass, setpass] = useState('');
  const [conpass, setconpass] = useState('');

  const navigate = useNavigate();  // To navigate after successful signup

  function handlename(evt) {
    setname(evt.target.value);
  }

  function handlepass(evt) {
    setpass(evt.target.value);
  }

  function handleconpass(evt) {
    setconpass(evt.target.value);
  }

  function handleclick() {
    if (pass === conpass) {
      setuser((prevUsers) => [
        ...prevUsers,
        { username: name, password: pass },
      ]);

      // Clear input fields after successful signup
      setname('');
      setpass('');
      setconpass('');

      // Redirect to login page after signup
      navigate('/');
    } else {
      alert('Passwords do not match.');
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
            <p className="text-xl text-gray-600 text-center">Welcome to Sign Up!</p>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                onChange={handlename}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                value={name}
                required
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              </div>
              <input
                onChange={handlepass}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                value={pass}
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              </div>
              <input
                onChange={handleconpass}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                value={conpass}
              />
            </div>
            <div className="mt-8">
              <button
                onClick={handleclick}
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
            </div>

            <div className="mt-4 flex items-center w-full text-center">
              <a href="#" className="text-xs text-gray-500 capitalize text-center w-full">
                Already have an account?
                <span className="text-blue-700">
                  <Link to="/">Sign In</Link>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
