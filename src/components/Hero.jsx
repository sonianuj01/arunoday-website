import { ChevronDown } from 'lucide-react';
import Button from './ui/Button'
import heroBg from '../assets/Hero-bg.jpg';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-dark/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 leading-tight">
          Entrepreneurship Cell
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
          MANIT Bhopal
        </h2>
        <div className="text-xl md:text-2xl lg:text-3xl text-gold font-medium tracking-wider mb-12 animate-glow-pulse">
          #makethingshappen
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gold text-gold-foreground hover:bg-gold/90 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 "
          >
            Join E-Summit '25
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-gold-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-float"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;