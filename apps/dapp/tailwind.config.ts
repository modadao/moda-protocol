const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundImage: {
        'drop-pattern': "url('/landing_page/drop_background.svg')",
        'line-arrow': "url('/landing_page/line_arrow.svg')",
        'black-line': "url('/landing_page/black_line.svg')",
      },
      boxShadow: {
        'menu-content': '0px 0px 24px 0px rgba(0,0,0,0.16)',
      },
      colors: {
        whiteBackground: '#F7F7F7',
        lightGrey: '#EEEEEE',
        counterBorder: '#404040',
        mediumGrey: '#d4d4d8',
        mediumDarkGrey: '#9E9E9E',
        darkGrey: '#404040',
        polygon: '#8247e5',
        success: colors.green[500],
        error: colors.red[500],
        dropOverlay: '#070D0E',
      },
      height: {
        vLineHeight: '29px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      lineHeight: {
        clamped: '.8',
      },
      spacing: {
        4.5: '1.125rem',
      },
      zIndex: {
        zToastLayer: '100',
        50: '50',
        60: '60',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(function ({
      addVariant,
    }: { addVariant: (arg0: string, arg1: string[]) => void }) {
      addVariant('slider-thumb', [
        '&::-webkit-slider-thumb',
        '&::slider-thumb',
      ]);
    }),
  ],
  future: { hoverOnlyWhenSupported: true },
};
