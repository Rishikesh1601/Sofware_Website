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
import BlockChainPage from './page/blockchain.page';
import ItopsPage from './page/itops.page';
import ContactUsPage from './page/contactus.page';
import TrustedClientsPage from './page/trustedclients.page';

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
        <Route path="/blockchain" element={<BlockChainPage />} />
        <Route path="/itops" element={<ItopsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/trusted clients" element={<TrustedClientsPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
