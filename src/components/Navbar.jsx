import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Server, Shield } from 'lucide-react';

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? 'bg-red-600/20 text-amber-300'
          : 'text-zinc-300 hover:text-white hover:bg-white/5'
      }`
    }
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-red-900/30 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-amber-500 shadow-lg">
            <Server className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-amber-200">
            NetOps • SysAdmin • PHP
          </span>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/skills">Skills</NavItem>
          <NavItem to="/experience">Experience</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-red-600 to-amber-500 px-3 py-2 text-sm font-semibold text-white shadow hover:from-red-500 hover:to-amber-400 md:hidden"
        >
          <Shield className="h-4 w-4" />
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
