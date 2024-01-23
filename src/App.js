import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/home.page';
import CustomSoftwareDevelopmentPage from './page/customsoftwaredevelopment.page';
import WebsiteDevelopment from './page/websitedevelopment.page';
import MobileDevelopmentPage from './page/mobiledevelopment.page';
import SoftwareTestingPage from './page/softwaretesting.page';
import ApiDevelopmentPage from './page/apidevelopment.page';
import AiopsPage from './page/aiops.page';
import DevOpsPage from './page/devops.page';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/custom software development" element={<CustomSoftwareDevelopmentPage />} />
        <Route path="/website development" element={<WebsiteDevelopment />} />
        <Route path="/mobile development" element={<MobileDevelopmentPage />} />
        <Route path="/software testing" element={<SoftwareTestingPage />} />
        <Route path="/api development" element={<ApiDevelopmentPage />} />
        <Route path="/aiops" element={<AiopsPage />} />
        <Route path="/devops" element={<DevOpsPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
