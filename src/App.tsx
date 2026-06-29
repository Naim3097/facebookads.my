import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout.tsx';
import LandingLayout from './components/LandingLayout.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

const FreeAudit = lazy(() => import('./pages/FreeAudit.tsx'));
const Home = lazy(() => import('./pages/Home.tsx'));
const Blog = lazy(() => import('./pages/Blog.tsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.tsx'));
const Resources = lazy(() => import('./pages/Resources.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const Privacy = lazy(() => import('./pages/Privacy.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Full site chrome (Navbar + Footer) for the secondary pages — kept alive but unlinked.
function SiteLayout() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* ── Ad landing page (single page, no menus) ── */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<FreeAudit />} />
          <Route path="/en" element={<FreeAudit />} />
          <Route path="/bm" element={<FreeAudit />} />
        </Route>

        {/* ── Secondary pages (exist, but not linked from the landing) ── */}
        <Route element={<SiteLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ── Backward-compat redirects (old /free-audit URLs → new root) ── */}
        <Route path="/free-audit" element={<Navigate to="/" replace />} />
        <Route path="/free-audit/en" element={<Navigate to="/en" replace />} />
        <Route path="/free-audit/bm" element={<Navigate to="/bm" replace />} />
        <Route path="/free-audit-bm" element={<Navigate to="/bm" replace />} />
      </Routes>
    </>
  );
}
