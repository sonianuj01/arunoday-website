import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';
import logo from '../assets/logo1.png';

const Footer = () => {
  const quickLinks = [
    'About Us',
    'Events',
    'Gallery',
    'Team',
    'Contact',
    'Blog'
  ];

  const events = [
    'Hindi Diwas',
    'Blood Donation Drive',
    'Candle March',
    'Seva Sangam',
    'Alumni Talk',
    'Gudi Padwa',
    'Nukkad Natak',
  ];

  const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter', color: 'text-blue-100 hover:text-blue-400' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'text-blue-700 hover:text-blue-500' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'text-pink-100 hover:text-pink-500' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'text-blue-600 hover:text-blue-500' },
];

  return (
    <footer className="bg-navy-dark border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="E-Cell MANIT" className="w-12 h-12" />
              <div className="text-foreground font-bold">
                <div className="text-lg">Arunoday</div>
                <div className="text-sm text-muted-foreground">IIIT BHOPAL</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering the next generation of change-makers through cultural expression, social awareness, and community-driven initiatives at IIIT Bhopal.
            </p>
            <div className="text-gold font-medium text-lg">
              #makethingshappen
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-6">Events</h3>
            <ul className="space-y-3">
              {events.map((event) => (
                <li key={event}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {event}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Indian Institute of Information</div>
                  <div> Technology, Bhopal</div>
                  <div>Madhya Pradesh, India - 462003</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <a 
                  href="mailto:arunodayiiitb@gmail.com" 
                  className="text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  arunodayiiitb@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <a 
                  href="tel:+917988700736" 
                  className="text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  +91 7988700736
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-foreground font-semibold text-lg mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates on events and opportunities.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-card border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="bg-gold text-gold-foreground px-6 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-navy-dark/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm flex items-center">
              © Arunoday IIIT Bhopal. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              by our team.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label , color }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-muted-foreground ${color} transition-colors duration-300 p-2`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;