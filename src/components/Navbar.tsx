import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  {
    label: '事業内容',
    href: '/services',
    children: [
      { label: 'Webシステム企画・開発', href: '/services/web' },
      { label: 'モバイルアプリ開発', href: '/services/mobile' },
    ],
  },
  { label: '開発プロセス', href: '/#process', isScroll: true },
  {
    label: '自社サービス',
    href: '/solutions',
    children: [
      { label: 'コンペ権兵衛', href: '/solutions/compe' },
      { label: 'Attach Lock', href: '/solutions/attach-lock' },
      { label: 'Trip4u', href: '/solutions/trip4u' },
    ],
  },
  { label: 'クリックフォーユーの魅力', href: '/charm' },
  { label: 'ニュース & Topics', href: '/news' },
  { label: '企業情報', href: '/#corporate', isScroll: true },
  { label: 'お問い合わせ', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: any) => {
    if (item.isScroll) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.href.replace('/#', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(item.href.replace('/#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 px-4 sm:px-6 lg:px-8' 
          : 'py-6 px-4 sm:px-6 lg:px-8'
      }`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-full px-6 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="クリックフォーユー" 
                className="w-10 h-10 rounded-full transition-transform duration-500 group-hover:rotate-12"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-full bg-brand-blue/20 animate-pulse scale-110 -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
              クリックフォーユー
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center cursor-pointer">
                  {item.isScroll ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`text-sm font-medium hover:text-brand-blue transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium hover:text-brand-blue transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && <ChevronDown className={`ml-1 w-4 h-4 transition-opacity ${isScrolled ? 'opacity-50' : 'opacity-80'}`} />}
                </div>

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-brand-blue transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors focus:outline-none ${isScrolled || isOpen ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="py-2">
                  <div className="flex items-center justify-between">
                    {item.isScroll ? (
                      <button
                        onClick={() => handleNavClick(item)}
                        className="text-base font-semibold text-gray-900"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-semibold text-gray-900"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                  {item.children && (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-blue-100 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-gray-600 hover:text-brand-blue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
