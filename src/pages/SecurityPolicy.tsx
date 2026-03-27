import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecurityPolicy() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920"
            alt="Security Policy"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-brand-blue/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-brand-blue/30">
                <ShieldCheck className="w-8 h-8 text-brand-blue" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold m-0 tracking-tight">情報セキュリティ基本方針</h1>
            </div>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              お客様の情報を守るための、当社の取り組みについて。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-brand-blue transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          ホームに戻る
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-blue max-w-none prose-headings:text-brand-dark prose-p:text-gray-600 prose-li:text-gray-600"
        >

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold border-l-4 border-brand-blue pl-4 mb-4">1. 基本方針</h2>
              <p className="leading-relaxed">
                当社は、お客様からお預かりする情報資産および当社が保有する情報資産を適切に保護し、安全かつ安心してご利用いただけるサービスを提供することを社会的責任と考えます。ここに「情報セキュリティ基本方針」を定め、全社を挙げてその実現に取り組みます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold border-l-4 border-brand-blue pl-4 mb-4">2. 情報資産の保護</h2>
              <p className="leading-relaxed">
                当社は、個人情報をはじめとする全ての情報資産を、不正アクセス、漏えい、改ざん、紛失、破壊などの脅威から保護するため、適切な管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold border-l-4 border-brand-blue pl-4 mb-4">3. 法令・規範の遵守</h2>
              <p className="leading-relaxed">
                当社は、個人情報保護法をはじめとする情報セキュリティに関する法令、規範、契約上の義務を遵守します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold border-l-4 border-brand-blue pl-4 mb-4">4. 教育・啓発</h2>
              <p className="leading-relaxed">
                当社は、役員および従業員に対して、情報セキュリティに関する教育・啓発活動を定期的に実施し、情報資産の適正な取り扱いを徹底します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold border-l-4 border-brand-blue pl-4 mb-4">5. 継続的改善</h2>
              <p className="leading-relaxed">
                当社は、情報セキュリティマネジメントシステムを定期的に見直し、社会的要請や技術動向の変化に対応し、継続的に改善していきます。
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-right">
            <p className="text-gray-600">制定日：2023年10月1日</p>
            <p className="font-bold mt-2">株式会社クリックフォーユー</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
