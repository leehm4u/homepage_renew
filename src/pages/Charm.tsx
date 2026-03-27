import { motion } from 'motion/react';
import { Smile, Zap, Users, ShieldCheck, Heart, Coffee, Globe, Rocket } from 'lucide-react';

const charms = [
  {
    title: '技術力へのこだわり',
    desc: '常に最新の技術スタックを追求し、パフォーマンス、セキュリティ、保守性の高いシステムを提供します。',
    icon: <Zap className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: '誠実なコミュニケーション',
    desc: 'お客様の課題を自分事として捉え、透明性の高い対話を通じて、真のパートナーシップを築きます。',
    icon: <ShieldCheck className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: '“楽しく働く”文化',
    desc: 'エンジニア自身が楽しみながら開発に取り組むことで、創造的で質の高いアウトプットが生まれます。',
    icon: <Smile className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: '多様なバックグラウンド',
    desc: '様々な業界経験を持つメンバーが集まり、多角的な視点から最適な解決策を導き出します。',
    icon: <Users className="w-10 h-10 text-brand-blue" />,
  },
];

export default function Charm() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
            alt="Team Collaboration"
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">クリックフォーユーの魅力</h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              私たちが大切にしている価値観と、お客様に選ばれ続ける理由をご紹介します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Charm Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {charms.map((charm, idx) => (
              <motion.div
                key={charm.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="mb-6">{charm.icon}</div>
                <h3 className="text-xl font-bold mb-4">{charm.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{charm.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                  alt="Enjoy Development"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                    <Smile className="w-16 h-16 text-white mx-auto animate-bounce" />
                    <p className="font-bold text-2xl text-white tracking-widest">Enjoy Development!</p>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12 z-20">
                <Heart className="w-12 h-12" />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">“楽しく働く”ことが、最高のサービスを生む</h2>
              <p className="text-gray-600 leading-loose mb-8">
                私たちは、エンジニアが自身の仕事に誇りを持ち、楽しみながら取り組める環境を追求しています。
                新しい技術への挑戦を奨励し、自由な発想を尊重する文化。
                それが、結果としてお客様に提供するシステムの品質向上につながると確信しています。
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Coffee className="w-6 h-6 text-brand-blue" />, title: 'リラックスできるオフィス環境', desc: '集中とリラックスのメリハリを大切にしています。' },
                  { icon: <Globe className="w-6 h-6 text-brand-blue" />, title: 'フルリモート・フレックス対応', desc: '個々のライフスタイルに合わせた柔軟な働き方を推奨します。' },
                  { icon: <Rocket className="w-6 h-6 text-brand-blue" />, title: 'スキルアップ支援', desc: '書籍購入やセミナー参加費用を会社が全額負担します。' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">チームメンバーの声</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'S. Tanaka', role: 'Fullstack Engineer', comment: '技術的な挑戦を歓迎してくれる文化があり、毎日が刺激的です。' },
              { name: 'M. Sato', role: 'UI/UX Designer', comment: 'デザインの価値を理解してくれるエンジニアが多く、スムーズに連携できます。' },
              { name: 'K. Suzuki', role: 'Project Manager', comment: 'お客様との距離が近く、直接感謝の言葉をいただけるのがやりがいです。' },
            ].map((member) => (
              <div key={member.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left">
                <p className="text-gray-600 italic mb-6">“{member.comment}”</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full" />
                  <div>
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
