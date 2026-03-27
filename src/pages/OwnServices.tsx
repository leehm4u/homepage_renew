import { motion } from 'motion/react';
import { Trophy, Lock, Map, ExternalLink, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 'compe',
    title: 'コンペ権兵衛',
    tag: 'ゴルフコンペ管理・集計システム',
    desc: 'ゴルフコンペの幹事様を強力にサポート。煩雑なスコア集計や順位決定を自動化し、スムーズな運営を実現します。',
    features: ['リアルタイムスコア入力', '多彩な集計ルール対応', '参加者管理・通知機能'],
    icon: <Trophy className="w-12 h-12 text-brand-blue" />,
    color: 'bg-blue-50',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'attach-lock',
    title: 'Attach Lock',
    tag: 'セキュア・ファイル共有ソリューション',
    desc: 'ビジネスにおける重要なファイルの受け渡しを安全に。パスワード管理や有効期限設定、閲覧ログの確認が可能です。',
    features: ['エンドツーエンド暗号化', '外部フォーム連携', '詳細なアクセスログ'],
    icon: <Lock className="w-12 h-12 text-brand-blue" />,
    color: 'bg-blue-50',
    sub: '外部フォーム',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'trip4u',
    title: 'Trip4u',
    tag: '旅のしおり作成・共有アプリ',
    desc: '「旅をもっと楽しく、もっと自由に」。行程表の作成から、同行者との共有、思い出の記録までを一つのアプリで。',
    features: ['共同編集機能', '地図連携・ルート検索', 'オフライン閲覧対応'],
    icon: <Map className="w-12 h-12 text-brand-blue" />,
    color: 'bg-green-50',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function OwnServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-40 pb-32 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1920"
            alt="Own Services Hero"
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
              OUR SOLUTIONS
            </motion.span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">自社サービス & ソリューション</h1>
            <p className="text-xl text-gray-300 leading-relaxed font-medium">
              クリックフォーユーでは、世の中の悩み・困りごとを解消し「楽しさ」をプラスした自社サービスを展開しています。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Solutions List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {solutions.map((sol, idx) => (
            <div key={sol.id} id={sol.id} className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 !== 0 ? 'order-2' : ''}
              >
                <div className={`w-20 h-20 ${sol.color} rounded-3xl flex items-center justify-center mb-8 shadow-sm`}>
                  {sol.icon}
                </div>
                <h2 className="text-4xl font-bold mb-2">{sol.title}</h2>
                <p className="text-brand-blue font-bold text-lg mb-6">{sol.tag}</p>
                <p className="text-gray-600 leading-loose mb-8 text-lg">
                  {sol.desc}
                </p>
                <div className="space-y-4 mb-10">
                  {sol.features.map((f) => (
                    <div key={f} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                      <span className="font-medium text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
                {sol.sub && (
                  <div className="mb-8 p-4 bg-gray-50 rounded-xl border-l-4 border-brand-blue">
                    <h4 className="font-bold text-sm mb-1">追加機能：{sol.sub}</h4>
                    <p className="text-xs text-gray-500">外部からの安全なファイルアップロードを可能にする専用フォーム機能。</p>
                  </div>
                )}
                <Link
                  to={`/solutions/${sol.id}`}
                  className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold hover:bg-gray-800 transition-all flex items-center group w-fit"
                >
                  サービス詳細を見る
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <div className={`relative ${idx % 2 !== 0 ? 'order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group z-10"
                >
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-50 bg-grid-pattern relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-16 rounded-[3rem] shadow-2xl shadow-brand-blue/5 border border-gray-100"
          >
            <h2 className="text-4xl font-bold mb-8">ソリューション導入のご相談</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              自社サービスの導入検討や、カスタマイズのご要望、<br />
              また同様の仕組みを用いた新規システム開発のご相談など、お気軽にお問い合わせください。
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-6 bg-brand-blue text-white rounded-full font-bold text-xl hover:bg-blue-600 transition-all shadow-xl shadow-brand-blue/30 hover:-translate-y-1"
            >
              お問い合わせフォームへ
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      </section>
    </div>
  );
}
