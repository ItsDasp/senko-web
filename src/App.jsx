import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import Home from '@/pages/Home';
import Commands from '@/pages/Commands';
import FAQ from '@/pages/FAQ';
import TOS from '@/pages/TOS';
import Privacy from '@/pages/Privacy';
import Credits from '@/pages/Credits';
import Vote from '@/pages/Vote';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="senko-theme">
      <Router>
        <div className="min-h-screen kitsune-pattern bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tos" element={<TOS />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;