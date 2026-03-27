import { motion } from 'motion/react';
import {
  ArrowLeft,
  Smartphone,
  Cpu,
  Zap,
  ShieldCheck,
  LifeBuoy,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileService() {
  const points = [
    {
      title: 'お客様のニーズに適したアプリケーションの開発',
      desc: '当社は、お客様のビジネス目標やユーザーのニーズに合わせてカスタマイズされたモバイルアプリケーションを開発します。ユーザーエクスペリエンスを最優先にし、魅力的で使いやすいアプリを提供します。',
      icon: Smartphone,
      iconWrapClass: 'bg-blue-50 group-hover:bg-blue-500',
      iconClass: 'text-blue-600 group-hover:text-white',
    },
    {
      title: '最新のテクノロジーの活用',
      desc: '我々は、最新のモバイルテクノロジーを活用して革新的なアプリケーションを開発します。ネイティブアプリ、クロスプラットフォーム、ハイブリッドアプリなど、最適な開発手法を選択し、最高のパフォーマンスと機能性を実現します。',
      icon: Cpu,
      iconWrapClass: 'bg-violet-50 group-hover:bg-violet-500',
      iconClass: 'text-violet-600 group-hover:text-white',
    },
    {
      title: '迅速な開発と柔軟な対応',
      desc: 'アジャイル開発手法を採用し、迅速なリリースとフィードバックループを実現します。柔軟なスケジュール管理と迅速な変更対応により、プロジェクトの進捗を最適化し、お客様の要件に応えます。',
      icon: Zap,
      iconWrapClass: 'bg-amber-50 group-hover:bg-amber-500',
      iconClass: 'text-amber-600 group-hover:text-white',
    },
    {
      title: 'セキュリティとプライバシーの確保',
      desc: 'ユーザーデータの保護とプライバシーの確保を最優先事項とし、堅牢なセキュリティ対策を実施します。SSL暗号化、データの暗号化、脆弱性スキャンなどのセキュリティ機能を組み込み、安全性を確保します。',
      icon: ShieldCheck,
      iconWrapClass: 'bg-emerald-50 group-hover:bg-emerald-500',
      iconClass: 'text-emerald-600 group-hover:text-white',
    },
    {
      title: '継続的なサポートとメンテナンス',
      desc: '当社はプロジェクトの終了後もお客様との継続的なパートナーシップを大切にし、サポートとメンテナンスサービスを提供します。システムの安定性とパフォーマンスを維持し、お客様のビジネス成功を支援します。',
      icon: LifeBuoy,
      iconWrapClass: 'bg-sky-50 group-hover:bg-sky-500',
      iconClass: 'text-sky-600 group-hover:text-white',
    },
  ];

  const firstPoint = points[0];
  const otherPointsTop = points.slice(1, 3);
  const otherPointsBottom = points.slice(3, 5);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1920"
            alt="Mobile Technology"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center mb-12 text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            事業内容一覧に戻る
          </Link>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
              モバイルアプリ<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">開発</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              iOS/Android両対応。ユーザーの日常に溶け込み、ビジネスの価値を最大化する高品質なモバイル体験を創造します。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Item 1 - Top Center */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="max-w-2xl w-full p-8 lg:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${firstPoint.iconWrapClass}`}
                  >
                    <firstPoint.icon
                      className={`w-8 h-8 transition-all duration-500 group-hover:scale-110 ${firstPoint.iconClass}`}
                    />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{firstPoint.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{firstPoint.desc}</p>
                </div>
              </div>
            </motion.div>

            {/* Items 2 & 3 - Middle Row */}
            {otherPointsTop.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 1) * 0.1 }}
                className="flex"
              >
                <div className="w-full p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${point.iconWrapClass}`}
                    >
                      <point.icon
                        className={`w-7 h-7 transition-all duration-500 group-hover:scale-110 ${point.iconClass}`}
                      />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Items 4 & 5 - Bottom Row */}
            {otherPointsBottom.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 3) * 0.1 }}
                className="flex"
              >
                <div className="w-full p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${point.iconWrapClass}`}
                    >
                      <point.icon
                        className={`w-7 h-7 transition-all duration-500 group-hover:scale-110 ${point.iconClass}`}
                      />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}