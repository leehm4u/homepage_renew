import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920"
            alt="Contact Us"
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">お問い合わせ</h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              プロジェクトのご相談、お見積り、採用に関するお問い合わせなど、
              お気軽にご連絡ください。担当者より2営業日以内にご連絡いたします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">連絡先情報</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">電話番号</p>
                      <p className="text-xl font-bold text-brand-dark">03-3560-6451</p>
                      <p className="text-sm text-gray-500">平日 10:00 - 19:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">メールアドレス</p>
                      <p className="text-xl font-bold text-brand-dark">sales@click4u.jp</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">所在地</p>
                      <p className="text-lg font-bold text-brand-dark leading-relaxed">
                        〒107-0052<br />
                        東京都港区赤坂2-5-8<br />
                        ヒューリック赤坂JPタワー 3F
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                <h4 className="font-bold text-lg mb-4">お急ぎの方へ</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  お電話でのお問い合わせが最もスムーズです。
                  「ホームページを見た」とお伝えいただければ、担当者がすぐに対応いたします。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">送信が完了しました</h3>
                    <p className="text-gray-600 mb-10">
                      お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold hover:bg-gray-800 transition-all"
                    >
                      フォームに戻る
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">お名前 <span className="text-brand-blue">*</span></label>
                        <input
                          required
                          type="text"
                          placeholder="山田 太郎"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">会社名</label>
                        <input
                          type="text"
                          placeholder="株式会社サンプル"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">メールアドレス <span className="text-brand-blue">*</span></label>
                        <input
                          required
                          type="email"
                          placeholder="example@click4u.co.jp"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">電話番号</label>
                        <input
                          type="tel"
                          placeholder="03-1234-5678"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">お問い合わせ項目 <span className="text-brand-blue">*</span></label>
                      <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all appearance-none">
                        <option>Webシステム開発について</option>
                        <option>モバイルアプリ開発について</option>
                        <option>自社サービスについて</option>
                        <option>採用について</option>
                        <option>その他</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">お問い合わせ内容 <span className="text-brand-blue">*</span></label>
                      <textarea
                        required
                        rows={6}
                        placeholder="具体的なご相談内容をご記入ください。"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all resize-none"
                      ></textarea>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input required type="checkbox" id="privacy" className="w-5 h-5 accent-brand-blue" />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        <Link to="/privacy" className="text-brand-blue underline">プライバシーポリシー</Link>に同意する
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-5 bg-brand-blue text-white rounded-full font-bold text-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group"
                    >
                      内容を確認して送信する
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
