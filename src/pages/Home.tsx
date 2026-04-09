import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';
import BlogCard from '../components/BlogCard.tsx';
import Reveal from '../components/Reveal.tsx';
import { articles } from '../data/articles.tsx';

const FEATURED = articles.slice(0, 3);
const STATS = [
  { value: '3.2B+', label: 'Monthly active META users' },
  { value: '93%', label: 'Malaysian internet users on social media' },
  { value: '7.2x', label: 'Average ROAS with proper targeting' },
];

const AD_FORMATS = [
  {
    title: 'Feed Ads',
    desc: 'Scroll-stopping visuals in the main feed',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=660&fit=crop',
  },
  {
    title: 'Stories & Reels',
    desc: 'Full-screen vertical creative that converts',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=660&fit=crop',
  },
  {
    title: 'Carousel Ads',
    desc: 'Swipeable product showcases',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=660&fit=crop',
  },
  {
    title: 'Video Ads',
    desc: 'Motion content that captures attention',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&h=660&fit=crop',
  },
];

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FacebookAds.my',
  url: 'https://facebookads.my',
  description: 'META advertising strategies and guides for Malaysian businesses',
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FacebookAds.my',
  url: 'https://facebookads.my',
};

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Learn how to run profitable Facebook and Instagram ads for your Malaysian business. Free guides, strategies, and benchmarks from a META ads specialist."
        canonical="/"
        schema={[orgSchema, websiteSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-purple-600 to-secondary text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Reveal delay={100} direction="none">
                <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  Free Strategies & Guides
                </span>
              </Reveal>
              <Reveal delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Master Facebook & Instagram Ads
                </h1>
              </Reveal>
              <Reveal delay={350}>
                <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                  Free strategies, step-by-step guides, and real benchmarks to help you
                  get the most out of META advertising.
                </p>
              </Reveal>
              <Reveal delay={500}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/blog"
                    className="px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm"
                  >
                    Read the Guides
                  </Link>
                  <Link
                    to="/resources"
                    className="px-6 py-3 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/25 transition-colors text-sm"
                  >
                    Free Resources ↓
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Floating ad creative previews */}
            <Reveal delay={400} direction="right">
              <div className="hidden md:flex justify-center items-center gap-5 h-80">
                <div className="w-36 h-48 rounded-2xl overflow-hidden shadow-2xl -rotate-6 border-2 border-white/20 hover:rotate-0 hover:scale-105 transition-all duration-500 shrink-0">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=520&fit=crop" alt="Product ad creative" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="w-40 h-56 rounded-2xl overflow-hidden shadow-2xl rotate-3 border-2 border-white/20 hover:rotate-0 hover:scale-105 transition-all duration-500 shrink-0 -mt-4 z-10">
                  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=520&fit=crop" alt="Food ad creative" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="w-36 h-48 rounded-2xl overflow-hidden shadow-2xl -rotate-3 border-2 border-white/20 hover:rotate-0 hover:scale-105 transition-all duration-500 shrink-0 mt-2">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=520&fit=crop" alt="Retail ad creative" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-3 gap-6 text-center stagger">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Format Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">Ad Formats That Convert</h2>
          <p className="text-gray-500 mt-2 text-center max-w-lg mx-auto">
            META offers powerful visual ad formats — each designed to stop the scroll
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {AD_FORMATS.map((format, i) => (
            <Reveal key={format.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img src={format.image} alt={format.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-white text-sm">{format.title}</h3>
                  <p className="text-white/70 text-xs mt-0.5">{format.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Latest Guides</h2>
              <p className="text-gray-500 mt-2">Actionable strategies you can implement today</p>
            </div>
            <Link to="/blog" className="hidden md:inline-flex text-sm font-medium text-primary hover:underline">
              View all articles →
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED.map((article, i) => (
            <Reveal key={article.slug} delay={i * 120}>
              <BlogCard article={article} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
            View all articles →
          </Link>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">What You'll Learn</h2>
            <p className="text-gray-500 mt-2 text-center max-w-lg mx-auto">
              From beginner setup to advanced optimization — everything about META ads for the Malaysian market
            </p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Audience Targeting', desc: 'Reach the right Malaysians with precise demographic, interest, and behaviour targeting.' },
              { title: 'Ad Creative', desc: 'Design scroll-stopping creatives that resonate with local audiences.' },
              { title: 'Budget & Bidding', desc: 'Set the right daily budget and bidding strategy for Malaysian market rates.' },
              { title: 'Analytics & ROAS', desc: 'Track what matters and calculate your real return on ad spend.' },
              { title: 'Instagram & Reels', desc: 'Leverage Stories, Reels, and IG Shopping for Malaysian consumers.' },
              { title: 'Retargeting', desc: 'Bring back visitors and turn warm audiences into paying customers.' },
            ].map((topic, i) => (
              <Reveal key={topic.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-bold text-gray-900 mt-3">{topic.title}</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{topic.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Reveal>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">Ready to grow your business with META ads?</h2>
            <p className="mt-3 text-white/80 max-w-lg mx-auto">
              Browse our free guides and start running profitable Facebook & Instagram campaigns today.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Link to="/blog" className="px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition text-sm">
                Start Learning
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 transition text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
