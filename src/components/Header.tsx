import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' },
    { id: 'projects', label: 'Projects' }
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent block' 
          : 'bg-transparent block'
      }`}
    >
      <div className="w-full md:hidden p-3">
        <div className={'flex  justify-end h-16'}>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-[100] px-5 text-primary-700 hover:text-primary-900 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden z-[99] fixed top-0 right-0 bg-black/50 backdrop-blur-sm rounded-bl-2xl">
            <div className="border-t border-primary-500 mt-20">
            </div>
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-primary-50 hover:text-primary-900 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
