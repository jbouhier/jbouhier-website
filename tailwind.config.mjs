/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.primary'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
          },
        },
      }),
      plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
      ],
      minHeight: {
        'screen': '100vh',
        'screen-100': '100%',
      },
      maxHeight: {
        'screen': '100vh',
        'screen-100': '100%',
      },
      colors: {
        // Custom pink background
        primary: {
          50: '#fff0f5',
          100: '#ffe4e9',
          200: '#ffd9e4',
          300: '#ffc4d9',
          400: '#ff9fbf',
          500: '#ff75a3',
          600: '#ff4b87',
          700: '#ff216b',
          800: '#ff004f',
          900: '#cc003f',
        },
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(to bottom, var(--primary-50), var(--primary-100))',
        'pink-gradient-dark': 'linear-gradient(to bottom, var(--primary-900), var(--primary-800))',
      },
      // Surface colors for cards and containers
      surface: {
        DEFAULT: '#ffffff',
        dark: '#1f2937',
      },
      // Border colors
      border: {
        DEFAULT: '#e5e7eb',
        dark: '#374151',
      },
      // Text colors
      text: {
        primary: '#1f2937',
        secondary: '#4b5563',
        light: '#f3f4f6',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'product': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'product-dark': '0 10px 30px rgba(0, 0, 0, 0.12)',
        'product-glow': '0 0 20px rgba(255, 75, 135, 0.12)',
        'product-hover': '0 12px 24px -4px rgba(0, 0, 0, 0.1), 0 8px 12px -2px rgba(0, 0, 0, 0.05) !important',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-out': 'fadeOut 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'slide-up-fade': 'slideUpFade 0.5s ease-out',
        'slide-down-fade': 'slideDownFade 0.5s ease-out',
        'slide-left-fade': 'slideLeftFade 0.5s ease-out',
        'slide-right-fade': 'slideRightFade 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'scale-out': 'scaleOut 0.5s ease-out',
        'rotate': 'rotate 0.5s ease-out',
        'pulse': 'pulse 1s ease-in-out infinite',
        'bounce': 'bounce 1s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
        'spin-reverse': 'spinReverse 1s linear infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-rotate': 'floatRotate 6s ease-in-out infinite',
        'float-rotate-fast': 'floatRotate 3s ease-in-out infinite',
        'float-rotate-slow': 'floatRotate 12s ease-in-out infinite',
        'float-scale': 'floatScale 6s ease-in-out infinite',
        'float-scale-fast': 'floatScale 3s ease-in-out infinite',
        'float-scale-slow': 'floatScale 12s ease-in-out infinite',
        'float-scale-rotate': 'floatScaleRotate 6s ease-in-out infinite',
        'float-scale-rotate-fast': 'floatScaleRotate 3s ease-in-out infinite',
        'float-scale-rotate-slow': 'floatScaleRotate 12s ease-in-out infinite',
        'float-scale-rotate-reverse': 'floatScaleRotateReverse 6s ease-in-out infinite',
        'float-scale-rotate-reverse-fast': 'floatScaleRotateReverse 3s ease-in-out infinite',
        'float-scale-rotate-reverse-slow': 'floatScaleRotateReverse 12s ease-in-out infinite',
        'title-fade': 'fadeIn 0.5s ease-in',
        'title-fade-out': 'fadeOut 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        productHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-4px) scale(1.02)' },
        },
      },
    },
  },
};
