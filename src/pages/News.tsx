import { motion } from 'motion/react';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/news';

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="News"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">ニュース & Topics</h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              クリックフォーユーの最新情報をお届けします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* News List */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsItems.map((news, idx) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={`/news/${news.id}`}
                  className="block group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue transition-all"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {news.date}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {news.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors">
                    {news.title}
                  </h3>
                  <div className="flex items-center text-brand-blue font-bold text-sm">
                    詳細を見る
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>


          {/* Pagination Teaser */}
          <div className="mt-16 flex justify-center space-x-2">
            <button className="w-10 h-10 rounded-full bg-brand-blue text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 font-bold hover:bg-blue-100 hover:text-brand-blue transition-colors">2</button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 font-bold hover:bg-blue-100 hover:text-brand-blue transition-colors">3</button>
            <button className="px-4 h-10 rounded-full bg-gray-100 text-gray-500 font-bold hover:bg-blue-100 hover:text-brand-blue transition-colors">次へ</button>
          </div>
        </div>
      </section>
    </div>
  );
}
