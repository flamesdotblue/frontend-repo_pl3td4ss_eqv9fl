import React from 'react';
import { Server, Shield, Code, Cpu, Database, Globe, Terminal } from 'lucide-react';

const skills = [
  {
    icon: <Server className="h-6 w-6 text-red-500" />,
    title: 'Server Administration',
    items: ['Linux & Windows', 'User/Access Control', 'Backups & Monitoring'],
  },
  {
    icon: <Globe className="h-6 w-6 text-red-500" />,
    title: 'Computer Networking',
    items: ['Routing & Switching', 'VLANs & Subnets', 'DNS, DHCP, NAT'],
  },
  {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    title: 'Security & Reliability',
    items: ['Hardening & Patching', 'Firewall Basics', 'Incident Response'],
  },
  {
    icon: <Database className="h-6 w-6 text-red-500" />,
    title: 'Infrastructure',
    items: ['Virtualization', 'Cloud Basics', 'Monitoring Tools'],
  },
  {
    icon: <Code className="h-6 w-6 text-red-500" />,
    title: 'Development',
    items: ['PHP (2 yrs)', 'Shell Scripts', 'Automation'],
  },
  {
    icon: <Cpu className="h-6 w-6 text-red-500" />,
    title: 'Troubleshooting',
    items: ['Diagnostics', 'Performance Tuning', 'Documentation'],
  },
  {
    icon: <Terminal className="h-6 w-6 text-red-500" />,
    title: 'CLI & Tools',
    items: ['Bash / PowerShell', 'Git', 'SSH & Remote Ops'],
  },
];

const Skills = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-zinc-200">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Core Skills</h2>
          <p className="mt-2 text-sm text-zinc-400 md:text-base">
            Network-first mindset with a strong systems background.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <div
            key={i}
            className="group rounded-xl border border-red-900/40 bg-zinc-900/60 p-5 shadow-sm backdrop-blur transition hover:shadow-red-900/30"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20">
              {s.icon}
            </div>
            <h3 className="text-lg font-semibold text-amber-300">{s.title}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
              {s.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
