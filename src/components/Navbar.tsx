import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Free Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src="/fbads-logo.png" alt="FBAds.my" className="h-6 md:h-8" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/free-audit"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
        >
          Get Free Audit
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                    pathname === link.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/free-audit"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 mt-1 rounded-full text-sm font-semibold text-center bg-primary text-white"
              >
                Get Free Audit →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
