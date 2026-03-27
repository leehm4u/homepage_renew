import { motion } from 'motion/react';
import { Code, Smartphone, Globe, Layers, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

{/*const webFeatures = [
  { title: '企画・要件定義', desc: 'お客様のビジネスモデルを理解し、最適なシステム構成を提案します。' },
  { title: 'UI/UXデザイン', desc: '使いやすさと美しさを両立した、ユーザー中心のインターフェース。' },
  { title: 'フロントエンド開発', desc: 'React, Next.js, Vue.jsなど最新技術を用いた高速なWeb体験。' },
  { title: 'バックエンド構築', desc: '堅牢で拡張性の高いサーバーサイド・データベース設計。' },
];*/}

{/*const mobileFeatures = [
  { title: 'お客様のニーズに適したアプリケーションの開発', desc: 'Swift, Kotlinによるネイティブ開発から、Flutter, React Nativeによるクロスプラットフォーム開発まで。' },
  { title: '最新のテクノロジーの活用', desc: '我々は、最新のモバイルテクノロジーと最適な開発手法を選択し、 最高のパフォーマンスと機能性を実現します。' },
  { title: '迅速な開発と柔軟な対応', desc: ' 柔軟なスケジュール管理と迅速な変更対応により、プロジェクトの進捗を最適化し、 お客様の要件に応えます。' },
  { title: 'セキュリティとプライバシーの確保', desc: 'ユーザーデータの保護とプライバシーの確保を最優先事項とし、堅牢なセキュリティ対策 を実施します。' },
];*/}

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-40 pb-32 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-4 rounded-full bg-brand-blue/20 text-brand-blue text-sm font-bold mb-6 border border-brand-blue/30 backdrop-blur-sm"
            >
              OUR EXPERTISE
            </motion.span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">事業内容</h1>
            <p className="text-xl text-gray-300 leading-relaxed font-medium">
              私たちは、Webシステムとモバイルアプリの開発を通じて、お客様のビジネス課題を技術で解決します。
              企画から開発、運用まで一貫したサポートを提供します。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Web System */}
      <section id="web" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Webシステム企画・開発</h2>
              <p className="text-gray-600 leading-loose mb-8">
                私たちは、アイデアと技術でWebの可能性を広げていくチームです。<br/>
                確かな技術力と豊富な経験をもとに、最新テクノロジーと直感的なUI設計で、<br/>
                「使いやすく、頼れる」仕組みを実現します。<br/>
                開発のすべての過程をお客様と一緒に楽しみ、成果でご満足いただけるソリューションを提供します。
              </p>
              {/*<div className="grid sm:grid-cols-2 gap-6">
                {webFeatures.map((f) => (
                  <div key={f.title} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <h4 className="font-bold text-brand-blue mb-2">{f.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>*/}
              <div className="mt-10">
                <Link
                  to="/services/web"
                  className="inline-flex items-center px-8 py-4 bg-brand-blue text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-200"
                >
                  Webシステム企画・開発の詳細を見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                  alt="Web Development"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12 z-20">
                <Layers className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section id="mobile" className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-2 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200"
                    alt="Mobile App Development"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-blue-200 rounded-full animate-spin-slow pointer-events-none opacity-50" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <Smartphone className="w-8 h-8 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-6">モバイルアプリ開発</h2>
              <p className="text-gray-600 leading-loose mb-8">
                当社は、お客様のビジネスモデルと課題を深く理解した上で、<br/>
                最適かつ独自性のあるモバイルアプリを企画・開発します。<br/>
                使いやすさ、機能性、デザイン性を融合し、「他にはない体験価値」を実現。<br/>
                iOS・Android対応のアプリで、ビジネスの差別化と成長を確実にサポートします。
              </p>
              {/*<div className="grid sm:grid-cols-2 gap-6">
                {mobileFeatures.map((f) => (
                  <div key={f.title} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-brand-blue mb-2">{f.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>*/}
              <div className="mt-10">
                <Link
                  to="/services/mobile"
                  className="inline-flex items-center px-8 py-4 bg-brand-blue text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-200"
                >
                  モバイルアプリ開発の詳細を見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-16"
          >
            使用技術スタック
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'AWS', 'GCP', 'Flutter', 'Swift', 'Kotlin', 'Docker'].map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-8 py-4 bg-gray-50 rounded-2xl font-bold text-gray-500 border border-gray-100 hover:border-brand-blue hover:text-brand-blue hover:bg-white hover:shadow-xl hover:shadow-brand-blue/10 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
