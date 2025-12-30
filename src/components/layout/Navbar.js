'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Navbar({ currentPage = 'home' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer" onClick={closeMobileMenu}>
            <div className="relative w-10 h-10">
              <Image
                src="/devslogo.svg"
                alt="DevsGuard Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[#0c456b] text-[27px] font-normal font-inter">
              DevsGuard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative font-medium text-[20px] transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'text-[#0c456b] font-semibold'
                    : 'text-[#2f2a2a]'
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[rgba(12,69,107,0.76)]" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center">
            <Button variant="ghost" href="/contact">
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-[#0c456b] cursor-pointer transition-transform"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block py-2 px-4 font-medium text-[18px] transition-colors cursor-pointer rounded-lg ${
                  currentPage === item.id
                    ? 'text-[#0c456b] font-semibold bg-[#0c456b]/10'
                    : 'text-[#2f2a2a] hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-gray-200">
              <div className="px-4">
                <Button
                  variant="ghost"
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="w-full justify-center"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

