import React from 'react';

import { Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Login } from './login/Login';
import { Order } from './order/Order';


function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={'Home'} />
       <Route path="/order" element={<Order />} />
       {/* <Route path="users" element={<Users />}>
         <Route path="me" element={<OwnUserProfile />} />
         <Route path=":id" element={<UserProfile />} /> */}
     </Routes>
    {/* <div>
      <Link to = "/">Home</Link>
    </div> */}
      <Header />
      <Login />   
    </>
  );
}

export default App;
