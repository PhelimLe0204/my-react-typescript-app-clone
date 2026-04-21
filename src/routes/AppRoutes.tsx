import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/HomeNew';
import About from '../pages/about/About';
import Portfolio from '../pages/portfolio/SanPhamDuAn';
import GiaiPhap from '../pages/giai-phap/GiaiPhap';
import Services from '../pages/services/Services';
import News from '../pages/news/TinTuc';
import Contact from '../pages/contact/Contact';
import NotFound from '../pages/not-found/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/giai-phap" element={<GiaiPhap />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;