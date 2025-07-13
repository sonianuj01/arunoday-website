import { Calendar, MapPin, Users, Award } from 'lucide-react';
import { Card, CardContent } from './ui/Card.jsx'
import Badge  from './ui/badge';


const Events = () => {
  // Array of past events
  const pastEvents = [
    {
      title: "E-Summit 2024",
      date: "March 15-17, 2024",
      location: "MANIT Campus",
      participants: "2000+",
      description: "Our flagship entrepreneurship summit featuring renowned speakers, startup competitions, and networking opportunities.",
      highlights: ["Startup Pitch Competition", "Industry Speaker Sessions", "Investor Meet", "Innovation Expo"],
      status: "completed",
      image: "🚀"
    },
    {
      title: "Innovation Challenge",
      date: "January 20, 2024",
      location: "Main Auditorium",
      participants: "500+",
      description: "A 48-hour hackathon focused on solving real-world problems through innovative technology solutions.",
      highlights: ["48-hour Hackathon", "Mentorship Sessions", "Prize Pool ₹2L", "Industry Partnerships"],
      status: "completed",
      image: "💡"
    },
    {
      title: "Startup Bootcamp",
      date: "November 10-12, 2023",
      location: "E-Cell Hub",
      participants: "300+",
      description: "Intensive 3-day workshop covering all aspects of starting and scaling a business venture.",
      highlights: ["Business Model Canvas", "Financial Planning", "Market Research", "Pitch Training"],
      status: "completed",
      image: "📈"
    },
    {
      title: "Women Entrepreneurship Day",
      date: "September 8, 2023",
      location: "Conference Hall",
      participants: "400+",
      description: "Celebrating and empowering women entrepreneurs with inspirational talks and success stories.",
      highlights: ["Women Leader Panel", "Success Stories", "Networking Session", "Mentorship Program"],
      status: "completed",
      image: "👩‍💼"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Past <span className="text-gold">Events</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our journey through impactful events that have shaped the entrepreneurial 
            landscape at MANIT and beyond.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pastEvents.map((event, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border hover:shadow-glow transition-all duration-500 hover:scale-[1.02] group animate-slide-in-left overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Event Header */}
                <div className="bg-navy-light p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12">
                    {event.image}
                  </div>
                  <Badge className="bg-gold text-gold-foreground mb-4">
                    {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground">{event.participants} Participants</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-gold" />
                      Event Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline"
                          className="border-gold/30 text-gold hover:bg-gold hover:text-gold-foreground transition-colors duration-300"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Impact Stats */}
        <div className="bg-card-gradient rounded-2xl p-8 border border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Our Event Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Events Organized", icon: Calendar },
              { number: "5000+", label: "Total Participants", icon: Users },
              { number: "₹50L+", label: "Prize Money Distributed", icon: Award },
              { number: "100+", label: "Industry Partners", icon: MapPin }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Events;