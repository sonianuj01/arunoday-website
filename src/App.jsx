import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Events from './components/Events.jsx';
import Footer from './components/Footer.jsx';
import Speakers from './components/Speakers.jsx';
// Removed Members import if only used in /team route

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <Gallery />
      <Events />
      <section id="speakers">
        <Speakers />
      </section>
      {/* Removed <Members /> here */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
