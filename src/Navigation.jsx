import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import WhyChooseParam from './components/WhyChooseParam';
import Aboutus from './pages/Aboutus';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import OurClients from './pages/OurClients';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
const Navigation = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/aboutus' element={<Aboutus />}></Route>
                <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
                <Route path='/our-clients' element={<OurClients />}></Route>
                <Route path='/careers' element={<Careers />}></Route>
                <Route path='/why-choose-param' element={<WhyChooseParam />}></Route>
                <Route path='/contact-us' element={<ContactUs />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default Navigation