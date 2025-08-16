import zestLogo from '../assets/zest-logo.png';

const ZestBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-orange-900/20" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Large torch symbols as background elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <img 
          src={zestLogo} 
          alt="" 
          className="w-96 h-96 object-contain animate-pulse" 
          style={{ animationDuration: '4s' }}
        />
      </div>
      
      {/* Additional torch elements */}
      <div className="absolute -top-20 -left-20 opacity-10 animate-float">
        <img 
          src={zestLogo} 
          alt="" 
          className="w-48 h-48 object-contain transform rotate-12" 
        />
      </div>
      
      <div className="absolute -bottom-20 -right-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <img 
          src={zestLogo} 
          alt="" 
          className="w-64 h-64 object-contain transform -rotate-12" 
        />
      </div>

      {/* Orange glow effects */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, orange 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default ZestBackground;