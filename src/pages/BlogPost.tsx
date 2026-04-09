import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { marked } from 'marked';
import SEO from '../components/SEO.tsx';
import Reveal from '../components/Reveal.tsx';
import { articles } from '../data/articles.tsx';
import NotFound from './NotFound.tsx';

const renderer = new marked.Renderer();
renderer.link = ({ href, text }) => {
  const isExternal = href.startsWith('http');
  if (isExternal) {
    return `<a href="${href}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
  }
  return `<a href="${href}">${text}</a>`;
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  const htmlContent = useMemo(() => {
    if (!article) return '';
    return marked.parse(article.content, { async: false, renderer }) as string;
  }, [article]);

  if (!article) return <NotFound />;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    url: `https://facebookads.my/blog/${article.slug}`,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: { '@type': 'Person', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'FacebookAds.my',
      url: 'https://facebookads.my',
    },
    mainEntityOfPage: `https://facebookads.my/blog/${article.slug}`,
    articleSection: article.category,
    keywords: article.keywords.join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://facebookads.my' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://facebookads.my/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://facebookads.my/blog/${article.slug}` },
    ],
  };

  const faqSchema = article.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: { '@type': 'Answer', text: q.answer },
        })),
      }
    : null;

  const schemas = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/blog/${article.slug}`}
        ogType="article"
        article={{
          publishedTime: article.dateISO,
          author: article.author,
          section: article.category,
          tags: article.keywords,
        }}
        schema={schemas}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <Reveal>
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-gray-600 truncate">{article.title}</span>
        </nav>
        </Reveal>

        {/* Header */}
        <Reveal delay={100}>
        <header>
          <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
              {article.author[0]}
            </div>
            <span>{article.author}</span>
            <span>·</span>
            <time dateTime={article.dateISO}>{article.date}</time>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </header>
        </Reveal>

        {/* Body */}
        <div
          className="mt-10 prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* FAQ */}
        {article.faq.length > 0 && (
          <Reveal>
          <section className="mt-12 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {article.faq.map((q, i) => (
                <details key={i} className="group bg-gray-50 rounded-xl">
                  <summary className="cursor-pointer px-5 py-4 font-medium text-gray-900 flex items-center justify-between">
                    {q.question}
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{q.answer}</div>
                </details>
              ))}
            </div>
          </section>
          </Reveal>
        )}

        {/* Related */}
        <Reveal>
        <section className="mt-12 border-t border-gray-100 pt-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Keep Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {articles
              .filter((a) => a.slug !== article.slug && a.category === article.category)
              .slice(0, 2)
              .map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-medium text-primary">{a.category}</span>
                  <h3 className="font-semibold text-gray-900 mt-1 leading-snug text-sm">{a.title}</h3>
                </Link>
              ))}
          </div>
        </section>
        </Reveal>
      </article>
    </>
  );
}
