import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    // <Router>
    //   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //     <Routes>
    //       {/* Route for Register Page */}
    //       <Route path="/register" element={<Register />} />
          
    //       {/* Route for Login Page */}
    //       <Route path="/login" element={<LoginPage />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Register/>
  );
};

export default App;
