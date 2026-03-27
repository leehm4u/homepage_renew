import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="クリックフォーユー" 
                  className="w-12 h-12 rounded-full transition-transform duration-500 group-hover:rotate-12"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -inset-1 bg-brand-blue/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-bold text-2xl tracking-tighter">クリックフォーユー</span>
            </Link>
            <p className="text-gray-400 text-sm leading-loose mb-10">
              あなたに寄り添う確かなエキスパート。高い技術力と誠実な姿勢で、お客様のビジネスを成功へ導くITパートナーです。
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-brand-blue pl-4">メニュー</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">事業内容</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-blue transition-colors">自社サービス</Link></li>
              <li><Link to="/charm" className="hover:text-brand-blue transition-colors">クリックフォーユーの魅力</Link></li>
              <li><Link to="/news" className="hover:text-brand-blue transition-colors">ニュース & Topics</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-brand-blue pl-4">自社サービス</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/solutions/compe" className="hover:text-brand-blue transition-colors">コンペ権兵衛</Link></li>
              <li><Link to="/solutions/attach-lock" className="hover:text-brand-blue transition-colors">Attach Lock</Link></li>
              <li><Link to="/solutions/trip4u" className="hover:text-brand-blue transition-colors">Trip4u</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-brand-blue pl-4">コンタクト</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-blue shrink-0" />
                <span>〒107-0052 東京都港区赤坂2-5-8 ヒューリック赤坂JPタワー 3F</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-blue shrink-0" />
                <span>03-3560-6451</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-blue shrink-0" />
                <span>sales@click4u.jp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2026 Click4U Co., Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link to="/security" className="hover:text-white transition-colors">情報セキュリティ方針</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
