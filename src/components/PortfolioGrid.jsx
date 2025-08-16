import { portfolios } from '../data/portfolios';
import PortfolioCard from './PortfolioCard';

const PortfolioGrid = () => {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* ZEST '26 Header */}
        <div className="text-center mb-20">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              ZEST
            </span>
            <span className="text-white ml-4">'26</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="text-orange-400">Portfolios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the specialized teams that bring ZEST '26 to life. Each portfolio plays a crucial role in creating an unforgettable experience.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;