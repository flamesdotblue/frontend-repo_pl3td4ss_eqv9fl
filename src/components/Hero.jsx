import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 text-left">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-700/40 bg-black/40 px-3 py-1 text-xs font-medium text-amber-300 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          Server Administration • Networking • Tech Support • PHP
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-6xl">
          Dark, Red, and Gold — Modern NetOps Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
          3 years across systems and networking with deep troubleshooting and support, plus 2 years building in PHP.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/skills"
            className="rounded-lg bg-gradient-to-r from-red-600 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:from-red-500 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-red-500/40"
          >
            Explore Skills
          </a>
          <a
            href="/contact"
            className="rounded-lg border border-red-700/50 bg-black/40 px-4 py-2 text-sm font-semibold text-amber-200 backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
