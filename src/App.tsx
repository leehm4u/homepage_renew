import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import WebService from './pages/services/WebService';
import MobileService from './pages/services/MobileService';
import OwnServices from './pages/OwnServices';
import Compe from './pages/solutions/Compe';
import AttachLock from './pages/solutions/AttachLock';
import Trip4u from './pages/solutions/Trip4u';
import Charm from './pages/Charm';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SecurityPolicy from './pages/SecurityPolicy';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web" element={<WebService />} />
            <Route path="/services/mobile" element={<MobileService />} />
            <Route path="/solutions" element={<OwnServices />} />
            <Route path="/solutions/compe" element={<Compe />} />
            <Route path="/solutions/attach-lock" element={<AttachLock />} />
            <Route path="/solutions/trip4u" element={<Trip4u />} />
            <Route path="/charm" element={<Charm />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/security" element={<SecurityPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
