import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, Star, Phone } from 'lucide-react';

const NavLinks = ({ mobile, setIsOpen }: { mobile?: boolean; setIsOpen?: (value: boolean) => void } = {}) => {
  const links = [
    { to: "/", icon: Home, text: "Home" },
    { to: "/about", icon: Info, text: "About Us" },
    { to: "/features", icon: Star, text: "Features" },
    { to: "/contact", icon: Phone, text: "Contact Us" },
  ];

  const baseClasses = "transition-all duration-300";
  const desktopClasses = "hidden md:flex items-center space-x-8";
  const mobileClasses = "flex flex-col space-y-4";

  return (
    <div className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen?.(false)}
          >
            <Icon className="w-5 h-5 mr-2" />
            <span className="font-medium">{link.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/PxqPdky1/image.png" 
              alt="Serene Mind Logo" 
              className="h-12 w-auto"
            />
          </Link>

          <NavLinks />

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <NavLinks mobile setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;