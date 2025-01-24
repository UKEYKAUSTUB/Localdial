import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();

  // Define routes where Navbar should not be displayed
  const hideNavbarRoutes = ["/signup","/login"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      <Footer/>
    </>
  );
};
 

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
