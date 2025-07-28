import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-amber-600';
  const inactiveLinkClass = 'text-slate-700 hover:text-amber-600 transition-colors duration-300';

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center">
             <Logo className="h-14 w-auto" />
          </NavLink>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : inactiveLinkClass} text-lg font-medium`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:block">
             <NavLink
                to="/contact"
                className="inline-block bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                Get a Quote
              </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-amber-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : inactiveLinkClass} text-lg font-medium`
                }
              >
                {link.name}
              </NavLink>
            ))}
             <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-amber-500 text-white font-semibold py-2 px-8 rounded-lg hover:bg-amber-600 transition-all duration-300"
              >
                Get a Quote
              </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
