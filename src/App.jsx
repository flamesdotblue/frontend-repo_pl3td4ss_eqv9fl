import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="mx-auto mt-8 max-w-6xl px-6 pb-10 text-sm text-zinc-400">
          <div className="flex flex-col items-center justify-between gap-3 border-t border-red-900/40 pt-6 md:flex-row">
            <p>
              © {new Date().getFullYear()} • Networking-focused Portfolio
            </p>
            <p className="text-center md:text-right">
              Dark • Red • Gold — built for reliability and performance.
            </p>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
