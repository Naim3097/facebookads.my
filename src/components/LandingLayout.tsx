import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

/**
 * Single-page landing chrome — NO navigation menus.
 * Used for the ad landing page so visitors stay in the funnel.
 * (Other pages still exist under the full SiteLayout, just unlinked.)
 */
export default function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Logo-only header — no menu, no exits */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link to="/" aria-label="FacebookAds.my" className="flex items-center">
            <img src="/fbads-logo.png" alt="FBAds.my" className="h-6 md:h-8" />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Minimal legal footer — privacy link kept for PDPA, nothing else to click away */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} fbads.my. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-xs text-gray-300">Not affiliated with Meta Platforms, Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
