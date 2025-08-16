import StaticBackground from '../components/StaticBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-fixed bg-zest-background relative">
      <StaticBackground />
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
