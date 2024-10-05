import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../../src/common/navbar/index.js'
import Home from '../pages/home/index.js';
import Footer from '../../src/common/footer/index.js';
import DataAI from "../../src/pages/dataAI/index.js";
import Industries from "../../src/pages/Industries/index.js";
import CyberResiliency from "../../src/pages/CyberResiliency/index.js";
import InfrastructureApplication from "../../src/pages/InfrastructureApplication/index.js";
import ContactUs from "../../src/pages/ContactUs/index.js";
import AboutUs from "../../src/pages/AboutUs/index.js";
import SolutionsPage from "../../src/pages/SolutionsPage/index.js";
import ManagedService from "../../src/pages/ManagedService/index.js";
import Blogs from "../../src/pages/Blogs/index.js";
import Carriers from "../../src/pages/Carriers/index.js";
import CaseStudy from "../../src/pages/CaseStudy/index.js";
import HyperCloud from "../../src/pages/HyperCloud/index.js";
import Resources from "../../src/pages/Resources/index.js";


const Main = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DataAI' element={<DataAI />} />
        <Route path='/Industries' element={<Industries />} />
        <Route path='/CyberResiliency' element={<CyberResiliency />} />
        <Route path='/ManagedService' element={<ManagedService />} />
        <Route path='/InfrastructureApplication' element={<InfrastructureApplication />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/SolutionsPage' element={<SolutionsPage />} />
        <Route path='/Blogs' element={<Blogs/>} />
        <Route path='/Carriers' element={<Carriers />} />
        <Route path='/CaseStudy' element={<CaseStudy />} />
        <Route path='/HyperCloud' element={<HyperCloud />} />
        <Route path='/Resources' element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Main;
