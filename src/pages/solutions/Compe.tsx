import { motion } from 'motion/react';
import {
  Trophy,
  UserPlus,
  Users,
  Calendar,
  MessageSquare,
  QrCode,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: '自動登録',
    desc: 'LINEのユーザ情報を活用し、利用者の登録を自動的に行うことができます。これにより、手動での入力作業が不要となり、利用開始までのプロセスが大幅に簡素化されます。',
    icon: UserPlus,
    iconWrapClass: 'bg-blue-50 group-hover:bg-blue-500',
    iconClass: 'text-blue-600 group-hover:text-white',
    glowClass: 'bg-blue-500/10',
  },
  {
    title: 'グループ作成',
    desc: '幹事はゴルフコンペの参加者グループを簡単に作成できます。アプリに招待されたLINE上の友だちをグループに追加することで、コンペの作成がよりスムーズに進められます。',
    icon: Users,
    iconWrapClass: 'bg-violet-50 group-hover:bg-violet-500',
    iconClass: 'text-violet-600 group-hover:text-white',
    glowClass: 'bg-violet-500/10',
  },
  {
    title: 'コンペの作成',
    desc: 'コンペの詳細情報（日時、ゴルフ場、参加締切、参加者）をアプリ内で設定し、簡単に新しいゴルフコンペを作成できます。一度作成したコンペの情報も、アプリ内で編集可能です。',
    icon: Calendar,
    iconWrapClass: 'bg-amber-50 group-hover:bg-amber-500',
    iconClass: 'text-amber-600 group-hover:text-white',
    glowClass: 'bg-amber-500/10',
  },
  {
    title: '組み合わせ',
    desc: '参加者の組み合わせを自動的に決定する組み合わせ機能を搭載。幹事が手動で組み合わせを調節することもできます。',
    icon: Trophy,
    iconWrapClass: 'bg-emerald-50 group-hover:bg-emerald-500',
    iconClass: 'text-emerald-600 group-hover:text-white',
    glowClass: 'bg-emerald-500/10',
  },
  {
    title: 'LINE通知',
    desc: '作成したコンペ情報や変更点、組み合わせ結果などを、LINE通知を通じて参加者に即時に伝えることができます。これにより、連絡ミスや漏れを防ぎ、円滑なコミュニケーションが可能になります。',
    icon: MessageSquare,
    iconWrapClass: 'bg-sky-50 group-hover:bg-sky-500',
    iconClass: 'text-sky-600 group-hover:text-white',
    glowClass: 'bg-sky-500/10',
  },
];

export default function Compe() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1920"
            alt="Golf Course"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/solutions"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            自社サービス一覧に戻る
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-brand-blue text-white text-xs font-bold mb-6">
                LINEミニアプリ
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">コンペ権兵衛</h1>
              <p className="text-2xl font-bold text-blue-400 mb-8">
                幹事、もう悩まない。<br />ゴルフコンペ運営を、LINEで完結。
              </p>
              <p className="text-gray-300 leading-loose text-lg mb-8 font-light max-w-xl">
                「コンペ権兵衛」は、ゴルフコンペの幹事業務を圧倒的にラクにする LINEミニアプリです。
                参加者管理、日程調整、組み合わせ作成、連絡通知までをスマホひとつで完結。
              </p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-72 h-72 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-white/20 flex flex-col items-center justify-center backdrop-blur-sm">
                  <QrCode className="w-48 h-48 text-brand-dark mb-4" />
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">LINEミニアプリQRコード</p>
                </div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-brand-blue rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-12 z-20">
                  <Trophy className="w-12 h-12" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">主な機能</h2>
            <p className="text-gray-500">幹事様の手間を最小限にするための充実した機能群</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700 ${f.glowClass}`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${f.iconWrapClass}`}
                  >
                    <f.icon
                      className={`w-8 h-8 transition-all duration-500 group-hover:scale-110 ${f.iconClass}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">これからのコンペ権兵衛</h2>
          <p className="text-gray-400 leading-loose mb-12">
            「コンペ権兵衛」を活用することで、ゴルフコンペの幹事業務が効率化され、参加者全員がスムーズにコンペを楽しむことができます。
            今後も更なる機能追加やサービス展開を通じて、ゴルフ愛好者の皆様にとって、より便利で楽しい体験を提供していく予定です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              <span className="text-sm font-medium">スコア集計機能（開発中）</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              <span className="text-sm font-medium">フォトギャラリー（開発中）</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">今すぐLINEで始める</h2>
          <p className="text-gray-600 mb-10">
            面倒なインストールは不要。LINEからQRコードを読み取るだけで、すぐにコンペの準備を始められます。
          </p>
          <div className="inline-block p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
            <QrCode className="w-48 h-48 text-brand-dark mx-auto mb-4" />
            <p className="text-sm font-bold text-brand-blue">スマホでスキャン</p>
          </div>
        </div>
      </section>
    </div>
  );
}