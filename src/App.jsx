import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Property from './pages/Property';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './App.css'
import Sidebar from './components/Sidebar';
import UserDashboard from './components/UserDashboard';
import ForgotPassword from './components/ForgotPassword';

const LayoutWithNavAndFooter = () => (
  <div>
    {/* <Sidebar/> */}
    <NavBar />
    <Sidebar/>
    <Outlet /> {/* This renders the nested route component */}
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutWithNavAndFooter />}>
          <Route path="/" element={<Property />} />
          <Route path="/dashboard" element={<UserDashboard/>}/>
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
};

export default App;
