import React from 'react';

const Contact = () => {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-red-900/40 bg-zinc-900/60 p-8 text-zinc-200 shadow-sm backdrop-blur">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Let’s Connect</h2>
        <p className="mt-2 text-sm text-zinc-400 md:text-base">
          Interested in roles focused on networking, systems, or tech support. I’m open to both remote and on-site opportunities.
        </p>
        <form
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-amber-300">Name</label>
            <input
              type="text"
              className="w-full rounded-lg border border-red-900/40 bg-black/40 px-3 py-2 text-zinc-100 outline-none ring-red-500/40 placeholder:text-zinc-500 focus:ring"
              placeholder="Your name"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-amber-300">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-red-900/40 bg-black/40 px-3 py-2 text-zinc-100 outline-none ring-red-500/40 placeholder:text-zinc-500 focus:ring"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-amber-300">Message</label>
            <textarea
              rows="4"
              className="w-full rounded-lg border border-red-900/40 bg-black/40 px-3 py-2 text-zinc-100 outline-none ring-red-500/40 placeholder:text-zinc-500 focus:ring"
              placeholder="Share a bit about your project or opportunity…"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-red-600 to-amber-500 px-4 py-2 font-semibold text-white shadow hover:from-red-500 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-red-500/40"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
