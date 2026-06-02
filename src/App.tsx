import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { DocPage } from './pages/DocPage';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        <Sidebar mobileOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        
        <div className="flex-1 md:pl-[401px] flex flex-col min-h-screen">
          <Navbar onMenuClick={() => setMobileMenuOpen(true)} />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/docs/:docId" element={<DocPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
