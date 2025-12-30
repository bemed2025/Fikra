import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MonitorPlay } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'خدماتنا', href: '/#services' },
    { label: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
              <MonitorPlay size={24} />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              فكرة <span className="text-primary-600">رقمية</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link 
              to="/contact"
              className="bg-primary-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              اطلب خدمتك
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-primary-600 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 animate-in slide-in-from-top-5">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-700 py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-primary-600 text-white text-center py-3 rounded-lg font-bold"
            >
              اطلب خدمتك الآن
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};