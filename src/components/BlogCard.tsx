import { Link } from 'react-router-dom';
import type { Article } from '../data/articles.tsx';

export default function BlogCard({ article }: { article: Article }) {
  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-gray-400">{article.readTime}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors leading-snug">
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
            {article.author[0]}
          </div>
          <div className="text-xs text-gray-400">
            <span className="text-gray-600 font-medium">{article.author}</span> · {article.date}
          </div>
        </div>
      </div>
    </article>
  );
}
