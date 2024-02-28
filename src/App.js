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
import CareerPage from './page/career.page';
import AboutUsPage from './page/aboutus.page';
// import Privacy from './components/privacy';
import PrivacyPage from './page/privacy.page';
import TermsPage from './page/terms.page';
import AngularPage from './page/angular.page';
import BootstrapPage from './page/bootstrap.page';
import FlutterPage from './page/flutter.page';
import HtmlPage from './page/html.page';
import IonicPage from './page/ionic.page';
import JavascriptPage from './page/javascript.page';
import ReactPage from './page/react.page';
import ShopifyPage from './page/shopify.page';
import WordpressPage from './page/wordpress.page';
import WooCommercePage from './page/woocommerce.page';
import DotnetPage from './page/dotnet.page';
import CodeIgniterPage from './page/codeigniter.page';
import LaravelPage from './page/laravel.page';
import MongoDBPage from './page/mongodb.page';

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
        <Route path="/career" element={<CareerPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/angular" element={<AngularPage />} />
        <Route path="/bootstrap" element={<BootstrapPage />} />
        <Route path="/flutter" element={<FlutterPage />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/ionic" element={<IonicPage />} />
        <Route path="/javascript" element={<JavascriptPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/shopify" element={<ShopifyPage />} />
        <Route path="/wordpress" element={<WordpressPage />} />
        <Route path="/woocommerce" element={<WooCommercePage />} />
        <Route path="/dotnet" element={<DotnetPage />} />
        <Route path="/codeigniter" element={<CodeIgniterPage />} />
        <Route path="/laravel" element={<LaravelPage />} />
        <Route path="/mongo" element={<MongoDBPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
