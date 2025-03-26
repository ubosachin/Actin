import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Fixed Add to Discord Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://discord.com/oauth2/authorize?client_id=1349968248636051521&permissions=8&integration_type=0&scope=bot+applications.commands"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-5 right-6 bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-0 z-50 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]"
      >
        Add to Discord
      </motion.a>

      {/* Top Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-xl border-b border-cyan-500/20 z-40"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Navigation */}
            <div className="flex items-center space-x-1">
              <NavLink to="/dashboard" current={location.pathname === '/dashboard'}>Dashboard</NavLink>
              <NavLink to="/features" current={location.pathname === '/features'}>Features</NavLink>
            </div>

            {/* Center Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <motion.img
                src="https://raw.githubusercontent.com/ubosachin/Gfx---Vfx/refs/heads/main/Actin-removebg-preview.png"
                alt="Actin Logo"
                className="h-16 w-auto object-contain"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center space-x-1">
              <NavLink to="/premium" current={location.pathname === '/premium'}>Premium</NavLink>
              <NavLink to="/contact" current={location.pathname === '/contact'}>Contact Us</NavLink>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute left-0 right-0 -bottom-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-sm"></div>
        <div className="absolute left-0 right-0 -bottom-2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-md"></div>
      </motion.nav>
    </>
  );
};

const NavLink = ({ to, children, current }: { to: string; children: React.ReactNode; current: boolean }) => (
  <Link
    to={to}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-cyan-400 group ${
      current ? 'text-cyan-400' : 'text-gray-300'
    }`}
  >
    <span className="relative z-10">{children}</span>
    {current && (
      <motion.div
        layoutId="navbar-indicator"
        className="absolute inset-0 bg-cyan-400/10 rounded-lg -z-10"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 rounded-lg transition-colors duration-300 -z-10"></div>
  </Link>
);

export default Navbar;
