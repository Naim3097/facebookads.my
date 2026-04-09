import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noindex
      />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        <p className="text-gray-500 mt-3 text-lg">
          This page doesn't exist. It might have been moved or deleted.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition text-sm"
          >
            Go Home
          </Link>
          <Link
            to="/blog"
            className="px-6 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition text-sm"
          >
            Read the Blog
          </Link>
        </div>
      </section>
    </>
  );
}
