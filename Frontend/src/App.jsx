import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Homepage from './components/Homepage'

const AppContent = () => {
  const location = useLocation();

  // Define routes where Navbar should not be displayed
  const hideNavbarRoutes = ["/signup","/login"];
  const hideFooterRoutes = ["/homepage"];
  console.log("Current Pathname:", location.pathname);
  console.log("Should Hide Footer:", hideFooterRoutes.includes(location.pathname));

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
     
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/homepage' element={<Homepage/>}/>
        
        
      </Routes>
      

      {!hideFooterRoutes.includes(location.pathname) && <Footer/>}
      

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
