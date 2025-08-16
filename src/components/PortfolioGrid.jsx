import { portfolios } from '../data/portfolios';
import PortfolioCard from './PortfolioCard';

const PortfolioGrid = () => {
  return (
    <section id="portfolios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zest-text-primary mb-4">
            Our <span className="text-gradient-orange">Portfolios</span>
          </h2>
          <p className="text-xl text-zest-text-secondary max-w-3xl mx-auto leading-relaxed">
            Meet the specialized teams that bring ZEST '26 to life. Each portfolio plays a crucial role in creating an unforgettable experience.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-zest-text-muted mb-6">
            Interested in joining one of our portfolios?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4 font-semibold focus:outline-none focus:ring-2 focus:ring-zest-orange focus:ring-offset-2 focus:ring-offset-zest-background"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;