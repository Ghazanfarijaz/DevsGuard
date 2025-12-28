import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Navbar({ currentPage = 'home' }) {
  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
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
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[#2f2a2a] font-semibold text-[20px] hover:text-[#0c456b] transition-colors cursor-pointer"
            >
              Log in
            </Link>
            <Button variant="ghost" href="/get-started">
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0c456b] cursor-pointer"
            aria-label="Toggle menu"
          >
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
          </button>
        </div>
      </div>
    </nav>
  );
}

