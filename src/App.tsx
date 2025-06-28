import { ClerkLoaded, ClerkLoading } from '@clerk/clerk-react';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import AuthPage from './pages/AuthPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PrivacyPolicy from './components/privacy-policy';
import TermsOfService from './components/terms-of-service';
import Tool from './pages/Tool';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <ClerkLoaded>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tool" element={<Tool />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </ClerkLoaded>
      </div>
    </Router>
  );
}

export default App;
