/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ZEST Brand Colors
        'zest-orange': 'hsl(var(--zest-orange))',
        'zest-orange-light': 'hsl(var(--zest-orange-light))',
        'zest-background': 'hsl(var(--zest-background))',
        'zest-surface': 'hsl(var(--zest-surface))',
        'zest-text-primary': 'hsl(var(--zest-text-primary))',
        'zest-text-secondary': 'hsl(var(--zest-text-secondary))',
        'zest-text-muted': 'hsl(var(--zest-text-muted))',
        'zest-border': 'hsl(var(--zest-border))',
      },
      backgroundImage: {
        'gradient-radial-bg': 'var(--gradient-radial-bg)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-orange': 'var(--gradient-orange)',
      },
      borderRadius: {
        'card': 'var(--radius-card)',
        'button': 'var(--radius-button)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'sweep': 'sweep 1.5s ease-in-out',
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
