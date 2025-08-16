import React from 'react';
import zestLogo from '../assets/zest-logo.png';

const ZestBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-orange-800/20" />
      
      {/* Logo pattern background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-pulse"
            style={{
              left: `${(i * 25 + 10) % 80}%`,
              top: `${(i * 30 + 15) % 70}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 2)}s`,
              transform: `rotate(${i * 45}deg) scale(${0.3 + (i % 3) * 0.2})`
            }}
          >
            <img 
              src={zestLogo} 
              alt="ZEST Logo" 
              className="w-32 h-32 opacity-50 filter brightness-200"
            />
          </div>
        ))}
      </div>
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Radial glow from center */}
      <div className="absolute inset-0 bg-radial-gradient from-orange-600/20 via-transparent to-transparent" />
    </div>
  );
};

export default ZestBackground;