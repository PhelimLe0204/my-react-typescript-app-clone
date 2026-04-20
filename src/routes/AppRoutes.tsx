import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/HomeNew';
import About from '../pages/about/About';
import Portfolio from '../pages/portfolio/SanPhamDuAn';
import Solution from '../pages/solution/Solution';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import NotFound from '../pages/not-found/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;