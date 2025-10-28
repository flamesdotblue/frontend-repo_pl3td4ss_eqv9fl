import React from 'react';
import Hero from './Hero';
import { Code2 } from 'lucide-react';

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="mx-auto -mt-10 max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-red-900/40 bg-zinc-900/60 p-6 text-zinc-200 shadow-lg backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="hidden rounded-lg bg-red-600/20 p-3 text-red-400 sm:block">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Focused on resilient, secure infrastructure</h2>
              <p className="mt-2 max-w-3xl text-sm text-zinc-400">
                I design, administer, and troubleshoot networks and servers with a security-first mindset,
                and complement operations with scripting and PHP development to automate routine tasks
                and streamline deployments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
