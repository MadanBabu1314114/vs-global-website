import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './theme/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollProgress from './components/motion/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import StudyUK from './pages/StudyUK';
import Process from './pages/Process';
import Documents from './pages/Documents';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }), [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <HashRouter>
          <ScrollToTop />
          <ScrollProgress />
          <Header />
          <main className="min-h-[60vh] pb-20 lg:pb-0 page-enter">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/study-uk" element={<StudyUK />} />
              <Route path="/process" element={<Process />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
        </HashRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
