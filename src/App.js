import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [user, setuser] = useState([
    {
      username : "dinesh",
      password : 123
    }
  ]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} setuser={setuser} />} />
          <Route path="/signup" element={<Signup user={user} setuser={setuser} />} />
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
