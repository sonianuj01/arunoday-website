import { Calendar, MapPin, Users, Award } from 'lucide-react';
import { Card, CardContent } from './ui/Card.jsx'
import Badge  from './ui/Badge.jsx';
import ArunodayImpact from './ArunodayImpact.jsx';


const Events = () => {
  // Array of past events
  const pastEvents = [
    {
      title: "Blood Donation drive",
      date: "March 2, 2024",
      location: "LRC Ground",
      participants: "200+",
      description: "First ever blood donation drive in IIIT and MANIT Bhopal",
      highlights: [
                    "🩸 Blood Donation Drive",
                    "Donor Registration",
                    "Health Check-up Camp",
                    "Life-Saving Contributions",
                    "Volunteering for a Cause"
                  ],
      status: "completed",
      image: "🩸"
    },
    {
      title: "Candle March",
      date: "August 16, 2024",
      location: "Nehru Nagar to MANIT-Square",
      participants: "300+",
      description: "A solemn candle march organized to honor the victims of the Kolkata rape case and raise awareness against gender-based violence.",
      highlights: [
                    "🕯️ Silent Protest March",
                    "Solidarity for Victims",
                    "Raising Awareness on Gender-Based Violence",
                    "Student and Faculty Participation",
                    "Advocating for Justice and Safety"
                  ],
      status: "completed",
      image: "🕯️",
    },
    {
      title: "Seva-Sangam",
      date: "January 31, 2025",
      location: "Vaishali-Nagar",
      participants: "100+",
      description: "A compassionate initiative to collect and donate clothes to the underprivileged, promoting kindness and social responsibility.",
      highlights: [
                    "🧥 Cloth Collection Drive",
                    "Donations from Students & Staff",
                    "Promoting Sustainable Giving",
                    "Spreading Warmth and Kindness",
                    "Uplifting the Underserved Communities"
                  ]
,
      status: "completed",
      image: "🧣"
    },
    {
      title: "Alumni-Talk",
      date: "February 10, 2025",
      location: "New-Teaching-Block, MANIT-Campus",
      participants: "400+ students & 10+ Alumni",
      description: "An inspiring session where distinguished alumni shared their experiences, insights, and guidance with current students.",
      highlights: [
                    "🎤 Interactive Alumni Session",
                    "Career & Industry Insights",
                    "Real-world Experiences Shared",
                    "Student-Alumni Networking",
                    "Guidance on Career Growth and Opportunities"
                  ],
      status: "completed",
      image: "🎤"
    },
    {
      title: "Gudi-Padwa",
      date: "April 3, 2025",
      location: "New-Teaching-Block, MANIT-Campus",
      participants: "400+ students & 30+ Faculties & Guests",
      description: "A vibrant celebration of Gudi Padwa that brought together the IIIT Bhopal community to honor tradition and culture.",
      highlights: [
                    "🎊 Traditional Gudi Setup",
                    "Bharat Mata Aarti",
                    "Cultural speech by cheif guests and faculty members",
                    "Traditional Dress and Decor",
                    "Celebrating the Marathi New Year Together"
                  ],
      status: "completed",
      image: "🎊"
    },
    {
      title: "Nukkad-Natak",
      date: "April 17, 2025",
      location: "Civil Auditorium, MANIT Campus",
      participants: "400+ students & 30+ Faculties & Guests",
      description: "A powerful street play performed to highlight the social evils of corruption and encourage civic accountability.",
      highlights:[
                    "🎭 Street Play on Corruption",
                    "Realistic and Impactful Performance",
                    "Public Awareness through Theatre",
                    "Youth-led Social Commentary",
                    "Call for Transparency and Justice"
                  ],
      status: "completed",
      image: "🎭"
    }

  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Past <span className="text-gold">Events</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our journey through impactful initiatives that have shaped social awareness and cultural vibrancy at IIIT Bhopal and beyond.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pastEvents.map((event, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border hover:shadow-glow transition-all duration-100 hover:scale-[1.02] group animate-slide-in-left overflow-hidden"
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
        <ArunodayImpact/>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Events;