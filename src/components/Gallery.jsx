import { useEffect, useRef } from 'react';
import gallery1 from '../assets/BD1.jpg';
import gallery2 from '../assets/BD2.jpg';
import gallery3 from '../assets/CD1.jpg';
import gallery4 from '../assets/CM1.jpg';
import gallery5 from '../assets/CM2.jpg';
import gallery6 from '../assets/CM3.jpg';
import gallery7 from '../assets/GP1.jpg';
import gallery8 from '../assets/NN1.jpg';
import gallery9 from '../assets/NN2.jpg';

const Gallery = () => {
  const scrollRef = useRef(null);


  const images = [
    { src: gallery1, alt: "Blood Donation" },
    { src: gallery2, alt: "Blood Donation" },
    { src: gallery3, alt: "Cloth Donation Drive" },
    { src: gallery4, alt: "Candle March" },
    { src: gallery5, alt: "Candle March" },
    { src: gallery6, alt: "Candle March" },
    { src: gallery7, alt: "Gudi Padwa" },
    { src: gallery8, alt: "Nukkad Natak" },
    { src: gallery9, alt: "Nukkad Natak" },
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden bg-black ">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments of cultural unity, social impact, and collaborative spirit from our vibrant events and initiatives.
          </p>
        </div>

        {/* Scrolling Gallery */}
        <div className="relative h-96 overflow-hidden rounded-2xl border border-border">
          <div 
            ref={scrollRef}
            className="flex animate-scroll hover:animation-paused"
           style={{
             width: `${images.length * 400}px`
            }}
          >
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="w-80 h-96 flex-shrink-0 mx-4 relative group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-foreground font-semibold text-lg mb-2">
                      {image.alt}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Memorable moments from our impactful journey
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-card to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-card to-transparent pointer-events-none"></div>
        </div>

        {/* Gallery Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Photo Gallery",
              description: "Browse through hundreds of photos from our events, workshops, and memorable moments.",
              count: "500+"
            },
            {
              title: "Event Highlights",
              description: "Relive the excitement and energy from our major events and competitions.",
              count: "50+"
            },
            {
              title: "Success Stories",
              description: "Discover inspiring stories of our alumni and their entrepreneurial journeys.",
              count: "100+"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-gold mb-2">
                {item.count}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Gallery;