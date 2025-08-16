const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-zest-orange/5 rounded-full blur-3xl -z-10"></div>
        
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-zest-text-primary mb-8">
          About <span className="text-gradient-orange">ZEST '26</span>
        </h2>

        {/* Main Content */}
        <div className="glass-card rounded-card p-8 sm:p-12 mb-12">
          <p className="text-xl text-zest-text-secondary leading-relaxed mb-6">
            ZEST '26 represents the pinnacle of collegiate excellence, bringing together diverse minds 
            and extraordinary talents to create something truly spectacular.
          </p>
          
          <p className="text-lg text-zest-text-muted leading-relaxed mb-8">
            Our festival is more than just an event—it's a celebration of innovation, creativity, 
            and the power of collaboration. Each portfolio team works tirelessly to ensure every 
            detail is perfect, every moment is memorable, and every participant feels the energy 
            that makes ZEST legendary.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-orange mb-2">18</div>
              <div className="text-sm text-zest-text-muted uppercase tracking-wide">Portfolio Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-orange mb-2">500+</div>
              <div className="text-sm text-zest-text-muted uppercase tracking-wide">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-orange mb-2">2026</div>
              <div className="text-sm text-zest-text-muted uppercase tracking-wide">Year of Excellence</div>
            </div>
          </div>

          <div className="w-16 h-0.5 bg-gradient-orange mx-auto"></div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-2xl font-semibold text-zest-text-primary mb-4">
            Ready to be part of something extraordinary?
          </h3>
          <p className="text-lg text-zest-text-secondary mb-8">
            Join us in creating the most amazing fest experience yet.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4 font-semibold focus:outline-none focus:ring-2 focus:ring-zest-orange focus:ring-offset-2 focus:ring-offset-zest-background"
          >
            Join ZEST '26
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;