import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/home.page';
import CustomSoftwareDevelopmentPage from './page/customsoftwaredevelopment.page';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/custom software development" element={<CustomSoftwareDevelopmentPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
