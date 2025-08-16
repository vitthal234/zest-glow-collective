import PortfolioGrid from '../components/PortfolioGrid';
import ZestBackground from '../components/ZestBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ZestBackground />
      <main className="relative z-10">
        <PortfolioGrid />
      </main>
    </div>
  );
};

export default Index;
