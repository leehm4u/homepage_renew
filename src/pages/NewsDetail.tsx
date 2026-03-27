import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { newsItems } from '../data/news';

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const news = newsItems.find((item) => item.id === Number(id));

  if (!news) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">記事が見つかりませんでした。</h2>
        <Link to="/news" className="text-brand-blue font-bold flex items-center justify-center">
          <ArrowLeft className="mr-2 w-4 h-4" />
          ニュース一覧に戻る
        </Link>
      </div>
    );
  }

  const nextNews = newsItems.find((item) => item.id === news.id + 1);
  const prevNews = newsItems.find((item) => item.id === news.id - 1);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {news.date}
              </div>
              <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold flex items-center">
                <Tag className="w-3 h-3 mr-1" />
                {news.category}
              </div>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              {news.title}
            </h1>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="text-gray-600 leading-loose space-y-6"
              dangerouslySetInnerHTML={{ __html: news.content || '' }}
            />
          </motion.div>

          {/* Navigation */}
          <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-8">
            {prevNews ? (
              <Link
                to={`/news/${prevNews.id}`}
                className="flex items-center group text-gray-500 hover:text-brand-blue transition-colors max-w-xs"
              >
                <ArrowLeft className="mr-4 w-5 h-5 group-hover:-translate-x-1 transition-transform shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-wider mb-1">前の記事</div>
                  <div className="text-sm font-bold line-clamp-1">{prevNews.title}</div>
                </div>
              </Link>
            ) : <div className="hidden sm:block w-40" />}

            <Link
              to="/news"
              className="px-8 py-3 rounded-full bg-gray-100 text-gray-600 font-bold hover:bg-brand-blue hover:text-white transition-all"
            >
              一覧に戻る
            </Link>

            {nextNews ? (
              <Link
                to={`/news/${nextNews.id}`}
                className="flex items-center group text-gray-500 hover:text-brand-blue transition-colors text-right max-w-xs"
              >
                <div className="text-right">
                  <div className="text-xs font-bold uppercase tracking-wider mb-1">次の記事</div>
                  <div className="text-sm font-bold line-clamp-1">{nextNews.title}</div>
                </div>
                <ChevronRight className="ml-4 w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ) : <div className="hidden sm:block w-40" />}
          </div>
        </div>
      </section>
    </div>
  );
}
