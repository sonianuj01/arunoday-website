import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Instagram } from 'lucide-react';
import Button from './ui/Button';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT US', target: 'about' },
    { label: 'SPEAKERS', target: 'speakers' },
    { label: 'OUR TEAM', target: 'team' },
    { label: 'CONTACT US', target: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/arunoday.iiitbhopal?igsh=MW13d2Q2dzN5Y2JqOA==',
      label: 'Instagram',
      color: 'text-pink-500 hover:text-pink-500'
    },
    {
      icon: Mail,
      href: '#',
      label: 'LinkedIn',
      color: 'text-blue-600 hover:text-blue-500'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-navy-dark/95 backdrop-blur-md py-2 shadow-elegant'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="IIIT-Bhopal"
              className={`transition-all duration-300 ${
                isScrolled ? 'w-10 h-10' : 'w-14 h-14'
              }`}
            />
            <div
              className={`text-foreground font-bold transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-lg'
              }`}
            >
              <div>Arunoday</div>
              <div className="text-xs text-muted-foreground">IIIT-Bhopal</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ label, target }) =>
              target === 'team' ? (
                <Link
                  key={label}
                  to="/team"
                  className="text-foreground hover:text-gold transition-colors duration-300 text-sm font-medium relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={label}
                  href={`#${target}`}
                  className="text-foreground hover:text-gold transition-colors duration-300 text-sm font-medium relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`text-foreground hover:${color} transition-colors duration-300 p-2`}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy-dark/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map(({ label, target }) =>
                target === 'team' ? (
                  <Link
                    key={label}
                    to="/team"
                    className="text-foreground hover:text-gold transition-colors duration-300 text-left py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={label}
                    href={`#${target}`}
                    className="text-foreground hover:text-gold transition-colors duration-300 text-left py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                )
              )}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-foreground hover:text-gold transition-colors duration-300 p-2"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;