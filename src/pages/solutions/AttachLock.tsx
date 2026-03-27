import { motion } from 'motion/react';
import {
  Lock,
  Shield,
  Zap,
  Cloud,
  Mail,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const securityFeatures = [
  {
    title: 'パスワード付き自動圧縮',
    desc: '送信ファイルはシステム側で自動的にパスワード付き圧縮処理を行い、安全性を高めます。',
    icon: Lock,
    iconWrapClass: 'bg-blue-50 group-hover:bg-blue-500',
    iconClass: 'text-blue-600 group-hover:text-white',
    glowClass: 'bg-blue-500/10',
  },
  {
    title: 'AWS S3による安全な一時保管',
    desc: '高度なクラウド基盤であるAWS S3ストレージへ安全に一時保存。堅牢なセキュリティ設計により、外部からの不正アクセスを防止します。',
    icon: Cloud,
    iconWrapClass: 'bg-violet-50 group-hover:bg-violet-500',
    iconClass: 'text-violet-600 group-hover:text-white',
    glowClass: 'bg-violet-500/10',
  },
  {
    title: 'URLとパスワードの分離送信',
    desc: 'ダウンロードURLとパスワードを別メールで時間差送信（30秒後）することで、万が一メールが漏えいした場合でも不正アクセスを防止します。',
    icon: Mail,
    iconWrapClass: 'bg-amber-50 group-hover:bg-amber-500',
    iconClass: 'text-amber-600 group-hover:text-white',
    glowClass: 'bg-amber-500/10',
  },
  {
    title: 'ダウンロード経路の分離設計',
    desc: '情報漏えいリスクを最小限に抑える仕組みを標準搭載。企業利用を前提とした設計思想で、安全なデータ共有を実現します。',
    icon: Shield,
    iconWrapClass: 'bg-emerald-50 group-hover:bg-emerald-500',
    iconClass: 'text-emerald-600 group-hover:text-white',
    glowClass: 'bg-emerald-500/10',
  },
];

export default function AttachLock() {
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
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920"
            alt="Secure Data"
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
                セキュアファイル送信システム
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">Attach Lock</h1>
              <p className="text-2xl font-bold text-blue-400 mb-8">「送る」だけで、守れる。</p>
              <p className="text-gray-300 leading-loose text-lg mb-8 font-light max-w-xl">
                「Attach Lock」は、ファイル共有をより安全・確実に行うために設計されたセキュアファイル送信システムです。
                高度なクラウド基盤と堅牢なセキュリティ設計により、「便利さ」と「安全性」を高いレベルで両立しています。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://tool.click4u.jp/shinsei/02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 flex items-center group"
                >
                  申請フォームへ
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-80 h-80 bg-white/10 backdrop-blur-xl p-12 rounded-full shadow-2xl border border-white/20 flex flex-col items-center justify-center">
                  <Shield className="w-32 h-32 text-brand-blue mb-4" />
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">SECURE FILE TRANSFER</p>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-blue rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-12 z-20">
                  <Lock className="w-12 h-12" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* One-Click Send Section */}
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                  alt="Secure Server"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-20 h-20 text-white opacity-50 animate-pulse" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-6">ワンクリックで送信完了</h2>
              <p className="text-gray-600 leading-loose text-lg mb-8">
                メール件名・本文は自動生成。送信先入力とファイル選択だけの簡単操作で利用可能。
                ITリテラシーに依存せず、社内標準ツールとして導入できます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">高いセキュリティ</h2>
            <p className="text-gray-500">情報漏えいリスクを最小限に抑える仕組みを標準搭載</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((f, idx) => (
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

      {/* Plans Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">利用プラン</h2>
            <p className="text-gray-500">まずは無料で始められるベーシックプランをご用意</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="p-10 rounded-3xl bg-brand-dark text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">ベーシックプラン</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold">無料</span>
                  <span className="text-gray-400 ml-2">/ 月</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    <span>月間最大100回まで送信可能</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    <span>全セキュリティ機能利用可能</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    <span>AWS S3による安全な保管</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mb-8 italic">
                  ※今後、送信回数拡張・管理機能強化プランも予定しています。
                </p>
                <a
                  href="https://tool.click4u.jp/shinsei/02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-brand-blue text-white rounded-full font-bold text-center hover:bg-blue-600 transition-all"
                >
                  申請フォームへ
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Application Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">サービス利用申請</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            利用をご希望の方は、以下のフォームよりお申し込みください。<br />
            まずはコストをかけずに、安全なファイル送信環境を体験いただけます。
          </p>
          <a
            href="https://tool.click4u.jp/shinsei/02"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-xl hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center mx-auto w-fit group"
          >
            申請フォームへ
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}