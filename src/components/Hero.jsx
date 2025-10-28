import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-12 text-left text-white">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Server Administration • Networking • Tech Support
        </span>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Building Reliable Networks and Systems
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
          3 years in systems and networking with specialized technical support, plus 2 years of PHP development experience.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#skills"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            View Skills
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
