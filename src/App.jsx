import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-gray-900">
      {/* Hero with Spline 3D background */}
      <Hero />

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="mx-auto mt-8 max-w-6xl px-6 pb-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-3 border-t pt-6 md:flex-row">
          <p>
            © {new Date().getFullYear()} • Networking-focused Portfolio
          </p>
          <p className="text-center md:text-right">
            Built with a focus on reliability, security, and clean infrastructure.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
