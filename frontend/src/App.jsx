import React from 'react'
import Register from './Components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        {/* Add other routes */}
      </Routes>
    </Router>
  )
}

export default App