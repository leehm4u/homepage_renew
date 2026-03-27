import { motion } from 'motion/react';
import {
  Map,
  Calendar,
  Sparkles,
  QrCode,
  ArrowLeft,
  CheckCircle2,
  Search,
  Compass,
  Navigation,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'フィットチェック',
    desc: '選択式とチャット形式の質問に答えるだけで、AIがあなたの好み・行動傾向・旅行スタイルを分析。自分でも気づかなかった「理想の旅」を可視化します。',
    icon: Search,
    iconWrapClass: 'bg-blue-50 group-hover:bg-blue-500',
    iconClass: 'text-blue-600 group-hover:text-white',
    glowClass: 'bg-blue-500/10',
  },
  {
    title: '様々なリクエスト対応',
    desc: '「長距離移動を避けたい」、「旅先でキャンプしたい」、「有名グルメを楽しみたい」 具体的な要望にも柔軟に対応し、条件に合った最適ルートを設計します。',
    icon: Compass,
    iconWrapClass: 'bg-violet-50 group-hover:bg-violet-500',
    iconClass: 'text-violet-600 group-hover:text-white',
    glowClass: 'bg-violet-500/10',
  },
  {
    title: '履歴・メモ機能',
    desc: '履歴機能で過去のプランも保存・確認可能。メモ機能でアクティビティ管理も簡単です。',
    icon: Calendar,
    iconWrapClass: 'bg-amber-50 group-hover:bg-amber-500',
    iconClass: 'text-amber-600 group-hover:text-white',
    glowClass: 'bg-amber-500/10',
  },
];

export default function Trip4u() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/solutions"
          className="flex items-center text-sm text-gray-500 hover:text-brand-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          自社サービス一覧に戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920"
            alt="Travel"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-brand-blue text-white text-xs font-bold mb-6">
                AIトラベルプランナー
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">Trip4u</h1>
              <p className="text-2xl font-bold text-blue-400 mb-8">旅の計画は、AIとつくる時代へ。</p>
              <p className="text-gray-300 leading-loose text-lg mb-8 font-light max-w-xl">
                あなた専属のトラベルプランナー。「Trip4u」があなたに旅行スタイルや好きなアクティビティに合わせて好みの旅行プラン提案します。
                目的地と日程、予算を入力して楽しい、わくわくの旅行プランを簡単に作成しましょう！
              </p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-80 h-80 bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] shadow-2xl border border-white/20 flex flex-col items-center justify-center">
                  <Sparkles className="w-32 h-32 text-brand-blue mb-4 animate-pulse" />
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">AI TRAVEL PLANNER</p>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-2xl rotate-12 z-20">
                  <Map className="w-12 h-12" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200"
                  alt="Travel Planning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
                <Navigation className="w-7 h-7 text-sky-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">直感的なマップ＆スケジュール</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                AIが作成したプランは、地図表示とタイムライン形式で直感的に確認できます。
                移動経路や滞在時間が一目でわかり、旅の全体像をストレスなく把握。
                Google Mapsとの連携により、そのままナビゲーションを開始することも可能です。
              </p>
              <ul className="space-y-3">
                {['移動経路の自動最適化', '滞在時間のシミュレーション', 'オフライン対応（履歴保存）'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Features Section */}
      <section className="py-20 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">その他の便利な機能</h2>
            <p className="text-sm text-gray-500">あなたの旅をより豊かにするツール群</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700 ${f.glowClass}`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${f.iconWrapClass}`}
                  >
                    <f.icon
                      className={`w-7 h-7 transition-all duration-500 group-hover:scale-110 ${f.iconClass}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">アプリダウンロード</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Trip4uは現在、より良い体験を提供するために最終調整を行っております。<br />
            リリースまで今しばらくお待ちください。
          </p>
          <div className="inline-block p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 relative grayscale opacity-50">
            <QrCode className="w-48 h-48 text-gray-400 mx-auto mb-4" />
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">（準備中）</p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-2 bg-brand-dark text-white rounded-full font-bold text-sm rotate-12 shadow-xl">
                COMING SOON
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}