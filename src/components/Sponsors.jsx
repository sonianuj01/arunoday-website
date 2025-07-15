const Sponsors = () => {
  const sponsors = [
    { name: "Microsoft", logo: "🚀" },
    { name: "Google", logo: "🔍" },
    { name: "Amazon", logo: "📦" },
    { name: "Intel", logo: "⚡" },
    { name: "IBM", logo: "💼" },
    { name: "Apple", logo: "🍎" },
    { name: "Meta", logo: "📱" },
    { name: "Tesla", logo: "🔋" }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gold">Sponsors</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're grateful to our amazing sponsors who make our events and initiatives possible. 
            Together, we're building the future of entrepreneurship.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="aspect-square bg-card-gradient  border border-border rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-glow transition-all duration-300 hover:scale-110 group animate-float"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${3 + (index % 3)}s`
              }}
            >
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-100">
                {sponsor.logo}
              </div>
              <div className="text-xs font-medium text-muted-foreground group-hover:text-gold transition-colors duration-100 text-center">
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center animate-slide-in-left">
          <div className="bg-background border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Become Our Partner
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hands with us to empower the next generation of entrepreneurs. 
              Partner with E-Cell MANIT and be part of the innovation ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-gold-foreground px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-glow">
                Sponsor Us
              </button>
              <button className="border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-105">
                Partnership Details
              </button>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Brand Visibility",
              description: "Get your brand in front of thousands of students, entrepreneurs, and industry professionals.",
              icon: "👁️"
            },
            {
              title: "Talent Access",
              description: "Connect with brilliant minds and potential future employees from MANIT's top talent pool.",
              icon: "🎯"
            },
            {
              title: "Innovation Partnership",
              description: "Collaborate on cutting-edge projects and be part of breakthrough innovations.",
              icon: "🤝"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="text-center animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Sponsors;