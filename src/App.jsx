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
import ResetPassword from './components/ResetPassword';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const LayoutWithNavAndFooter = () => (
  <div>
    
    <NavBar />
    <Sidebar/>
    <Outlet /> 
    <Footer />
  </div>
);

const App = () => {
  return (
    
      <Router>
     
     <Routes>
        <Route element={<LayoutWithNavAndFooter />}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Property />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dashboard" element={<UserDashboard/>}/>
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/reset/:token' element={<ResetPassword/>}/>
      </Routes>
   
    </Router>
    
  );
};

export default App;
