const StaticBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-radial-bg" />
      
      {/* Geometric patterns and orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large central orb */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-zest-orange/5 rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-zest-orange-light/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-zest-orange/8 rounded-full blur-xl animate-float" style={{animationDelay: '-2s'}} />
        <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-zest-orange-light/6 rounded-full blur-lg animate-float" style={{animationDelay: '-4s'}} />
        
        {/* Concentric rings SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="ringGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="hsl(25, 100%, 50%)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(25, 100%, 50%)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="hsl(25, 100%, 50%)" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Concentric circles */}
          <circle cx="500" cy="300" r="200" fill="none" stroke="url(#ringGradient)" strokeWidth="1" />
          <circle cx="500" cy="300" r="300" fill="none" stroke="url(#ringGradient)" strokeWidth="1" />
          <circle cx="500" cy="300" r="400" fill="none" stroke="url(#ringGradient)" strokeWidth="0.5" />
          <circle cx="500" cy="300" r="500" fill="none" stroke="url(#ringGradient)" strokeWidth="0.5" />
          
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(25, 100%, 50%)" strokeWidth="0.2" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')]" />
      </div>
    </div>
  );
};

export default StaticBackground;