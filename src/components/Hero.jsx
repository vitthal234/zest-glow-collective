const Hero = () => {
  const scrollToPortfolios = () => {
    const element = document.getElementById('portfolios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4">
            <span className="text-gradient-orange">ZEST</span>
            <span className="text-zest-text-primary"> '26</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-zest-text-secondary mb-2">
            Portfolios. People. Power.
          </p>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zest-text-muted max-w-2xl mx-auto leading-relaxed">
            Discover the powerhouse teams that make ZEST '26 possible. From creative vision to flawless execution.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToPortfolios}
            className="btn-primary text-lg px-8 py-4 font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-zest-orange focus:ring-offset-2 focus:ring-offset-zest-background"
          >
            Explore Portfolios
          </button>
          
          <button
            onClick={scrollToContact}
            className="btn-secondary text-lg px-8 py-4 font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-zest-orange focus:ring-offset-2 focus:ring-offset-zest-background"
          >
            Contact Us
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zest-orange/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zest-orange rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-zest-orange/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-zest-orange-light/3 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
    </section>
  );
};

export default Hero;