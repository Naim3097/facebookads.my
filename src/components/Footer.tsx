import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  {
    title: 'Content',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/resources', label: 'Free Resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Recommended Tools',
    links: [
      { href: 'https://business.facebook.com', label: 'META Business Suite', external: true },
      { href: 'https://www.canva.com', label: 'Canva', external: true },
      { href: 'https://nexova.my', label: 'Nexova', external: true, nofollow: true },
      { href: 'https://analytics.google.com', label: 'Google Analytics', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-extrabold text-white tracking-tight">FBAds<span className="text-primary">.my</span></Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Practical META advertising strategies for Malaysian businesses. Learn how to run profitable Facebook & Instagram ads.
            </p>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel={`noopener noreferrer${'nofollow' in link && link.nofollow ? ' nofollow' : ''}`}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FacebookAds.my. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Not affiliated with Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
