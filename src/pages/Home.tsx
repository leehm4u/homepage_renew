import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Code, Smartphone, Lightbulb, Users, Smile, Rocket, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920',
    title: 'あなたに寄り添う',
    highlight: '確かなエキスパート',
    description: '私たちは、高い技術力と誠実な姿勢で、お客様のビジネスを成功へ導くITパートナーです。',
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920',
    title: '未来を形にする',
    highlight: '革新的なソリューション',
    description: '最新のテクノロジーを駆使し、ビジネスの可能性を最大限に引き出すシステムを構築します。',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920',
    title: '共に歩む',
    highlight: '信頼のパートナーシップ',
    description: 'お客様の想いを深く理解し、伴走者として共に成長し続ける関係を築きます。',
  },
];

const Us = [
  {
    title: 'Understanding',
    subtitle: 'お客様を理解して',
    description: 'お客様のビジネス、課題、そして想いに深く寄り添い、真のニーズを汲み取ります。',
    icon: <Users className="w-8 h-8 text-brand-blue" />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Unity',
    subtitle: '技術を融合させて',
    description: '最新のテクノロジーと培ってきた経験を融合させ、最適なソリューションを構築します。',
    icon: <Code className="w-8 h-8 text-brand-blue" />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Unique',
    subtitle: '独特なシステム',
    description: '既成概念にとらわれず、お客様のビジネスに最も適合する独自のシステムを提案します。',
    icon: <Lightbulb className="w-8 h-8 text-brand-blue" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Uplift',
    subtitle: '楽しめるサービス',
    description: '使う人がワクワクし、ビジネスが加速するような、価値あるサービスを創り出します。',
    icon: <Rocket className="w-8 h-8 text-brand-blue" />,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
  },
];

const steps = [
  { title: 'ヒアリング', desc: 'お客様の課題や目標を詳しく伺います。' },
  { title: '企画・提案', desc: '最適な技術選定とシステム構成をご提案します。' },
  { title: '設計・開発', desc: 'アジャイルな手法で、スピーディーかつ高品質に開発します。' },
  { title: 'テスト・検証', desc: '厳格な品質管理基準に基づき、動作を検証します。' },
  { title: '納品・運用', desc: 'リリース後の保守・運用まで責任を持ってサポートします。' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="relative">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen flex items-center overflow-hidden bg-brand-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt="Hero Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block py-1 px-4 rounded-full bg-brand-blue/20 text-brand-blue text-sm font-bold mb-6 border border-brand-blue/30 backdrop-blur-sm"
              >
                IT EXPERT PARTNER
              </motion.span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
                {heroSlides[currentSlide].title}<br />
                <span className="text-brand-blue">{heroSlides[currentSlide].highlight}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 flex items-center group"
                >
                  お問い合わせはこちら
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  事業内容を見る
                </Link>
              </div>
            </motion.div>

            <div className="hidden lg:flex justify-end items-center space-x-4">
              <div className="flex flex-col space-y-4">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-12 rounded-full transition-all duration-500 ${
                      currentSlide === idx ? 'bg-brand-blue h-20' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-10 right-10 z-20 flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* 4 Us Section with Images */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold mb-6"
            >
              ４つの「U」をもとに解決します
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1.5 bg-brand-blue mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Us.map((u, idx) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-brand-blue/20 transition-all duration-500"
              >
                <img
                  src={u.image}
                  alt={u.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-90" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/30 transform group-hover:scale-110 transition-transform">
                    <div className="text-white">{u.icon}</div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{u.title}</h3>
                  <p className="text-brand-blue font-bold text-sm mb-4 uppercase tracking-wider">{u.subtitle}</p>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {u.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-12 rounded-[3rem] bg-brand-dark text-white relative overflow-hidden shadow-2xl shadow-brand-blue/10"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                alt="Vision Background"
                className="w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 flex items-center">
                  <Smile className="mr-4 text-brand-blue w-10 h-10" />
                  “楽しく働く”ことを大切にしています
                </h3>
              </div>
              <Link
                to="/charm"
                className="px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-brand-blue/30 whitespace-nowrap"
              >
                クリックフォーユーの魅力
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="process" className="py-32 bg-gray-50 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">開発プロセス</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">確かな品質を届けるための、クリックフォーユーの標準プロセスです。</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2 z-0" />
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center group hover:-translate-y-4 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-8 shadow-lg shadow-brand-blue/30 group-hover:rotate-12 transition-transform">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Info Section */}
      <section id="corporate" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-12">企業情報</h2>
              <div className="space-y-8">
                {[
                  { label: '会社名', value: '株式会社クリックフォーユー' },
                  { label: '設立', value: '2023年 2月' },
                  { label: '代表取締役', value: '李 鉉宇' },
                  { label: '所在地', value: '〒107-0052 東京都港区赤坂2-5-8 ヒューリック赤坂JPタワー 3F' },
                  { label: '事業内容', value: 'Webシステム開発、モバイルアプリ開発、ITコンサルティング' },
                  { label: '電話番号', value: '03-3560-6451' },
                ].map((info) => (
                  <div key={info.label} className="flex border-b border-gray-100 pb-6">
                    <span className="w-40 font-bold text-gray-400 text-sm uppercase tracking-widest">{info.label}</span>
                    <span className="flex-1 font-semibold text-lg text-brand-dark">
                      {info.label === '所在地' ? (
                        <span className="flex items-start">
                          <MapPin className="w-5 h-5 text-brand-blue mr-3 mt-1 shrink-0" />
                          {info.value}
                        </span>
                      ) : (
                        info.value
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1561!2d139.7366!3d35.6713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8575000001%3A0x0!2zMzXCsDQwJzE2LjciTiAxMznCsDQ0JzE5LjciRQ!5e0!3m2!1sja!2sjp!4v1711440000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
