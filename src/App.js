import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import WhyChooseParam from './components/WhyChooseParam';
import Aboutus from './pages/Aboutus';
import Careers from './pages/Careers';
import Home from './pages/Home';
import OurClients from './pages/OurClients';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <>
      <div className='w-full h-full mt-0 pt-0 '>
        <Header />
        {/* <WhyChooseParam /> */}
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/aboutus' element={<Aboutus />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route path='/our-clients' element={<OurClients />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/why-choose-param' element={<WhyChooseParam />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
