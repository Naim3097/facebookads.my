import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';
import BlogCard from '../components/BlogCard.tsx';
import Reveal from '../components/Reveal.tsx';
import { articles } from '../data/articles.tsx';

const CATEGORIES = ['All', ...Array.from(new Set(articles.map((a) => a.category)))];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blog — FacebookAds.my',
  description: 'Free Facebook and Instagram advertising guides for Malaysian businesses.',
  url: 'https://facebookads.my/blog',
};

export default function Blog() {
  const [category, setCategory] = useState('All');
  const filtered = category === 'All' ? articles : articles.filter((a) => a.category === category);

  return (
    <>
      <SEO
        title="Blog"
        description="Free Facebook and Instagram ads guides, tutorials, and strategies tailored for Malaysian businesses. Learn to run profitable META campaigns."
        canonical="/blog"
        schema={schema}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Blog</h1>
          <p className="text-gray-500 mt-2 max-w-lg">
            Practical guides and strategies to help Malaysian businesses run profitable META ad campaigns.
          </p>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        </Reveal>

        {/* Featured article */}
        {category === 'All' && filtered.length > 0 && (
          <Reveal>
            <Link to={`/blog/${filtered[0].slug}`} className="block mt-8 group">
              <div className="relative overflow-hidden rounded-2xl aspect-[21/9]">
                <img
                  src={filtered[0].image}
                  alt={filtered[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-xs font-medium text-white/80 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {filtered[0].category}
                  </span>
                  <h2 className="mt-3 text-xl md:text-2xl font-extrabold text-white leading-snug max-w-2xl">
                    {filtered[0].title}
                  </h2>
                  <p className="mt-2 text-sm text-white/70 max-w-xl line-clamp-2">{filtered[0].excerpt}</p>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Articles grid */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(category === 'All' ? filtered.slice(1) : filtered).map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <BlogCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
