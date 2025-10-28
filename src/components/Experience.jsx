import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Experience</h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          A concise look at my background across networking, support, and development.
        </p>
      </div>

      <div className="relative space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-[2px] before:bg-emerald-200 md:before:left-1/2 md:before:-translate-x-1/2">
        {/* Networking & Systems (3 years) */}
        <div className="relative md:grid md:grid-cols-2 md:gap-8">
          <div className="md:text-right md:pr-12">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Networking & Systems</div>
            <h3 className="text-xl font-semibold">Server Administrator & Technical Support Specialist</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Provided specialized support, configured networks (VLANs, subnets), managed servers, and ensured uptime, security, and documentation.
            </p>
          </div>
          <div className="md:pl-12">
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="text-sm text-muted-foreground">2019 — 2022</div>
              <ul className="mt-2 list-disc pl-5 text-sm">
                <li>Implemented monitoring and routine backups for reliability.</li>
                <li>Handled incident response and root-cause analysis.</li>
                <li>Optimized network performance and access controls.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PHP Development (2 years) */}
        <div className="relative md:grid md:grid-cols-2 md:gap-8">
          <div className="md:text-right md:pr-12">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Development</div>
            <h3 className="text-xl font-semibold">PHP Developer</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Built and maintained backend features, automated tasks, and improved performance of web applications.
            </p>
          </div>
          <div className="md:pl-12">
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="text-sm text-muted-foreground">2017 — 2019</div>
              <ul className="mt-2 list-disc pl-5 text-sm">
                <li>Developed REST endpoints and database queries.</li>
                <li>Wrote deployment and maintenance scripts.</li>
                <li>Collaborated with cross-functional teams.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
