/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1440px',
      },
      colors: {
        fill: {
          main: 'hsl(var(--main-fill) / <alpha-value>)',
          keypad: 'hsl(var(--keypad-fill) / <alpha-value>)',
          toggle: 'hsl(var(--toggle-fill) / <alpha-value>)',
          screen: 'hsl(var(--screen-fill) / <alpha-value>)',
        },
        keys: {
          fn: 'hsl(var(--keys-fn) / <alpha-value>)', 
          equal: 'hsl(var(--keys-equal) / <alpha-value>)', 
          number: 'hsl(var(--keys-number) / <alpha-value>)', 
        },
        text: {
          base: 'hsl(var(--text-base) / <alpha-value>)', 
          'keys-fn': 'hsl(var(--text-keys-fn) / <alpha-value>)', 
          'keys-number': 'hsl(var(--text-keys-number) / <alpha-value>)', 
          'keys-equal': 'hsl(var(--text-keys-equal) / <alpha-value>)', 
        },
        shadow: {
          fn: 'hsl(var(--keys-fn-shadow) / <alpha-value>)',
          equal: 'hsl(var(--keys-equal-shadow) / <alpha-value>)',
          number: 'hsl(var(--keys-number-shadow) / <alpha-value>)',
        },
        toggle: {
          DEFAULT: 'hsl(var(--toggle) / <alpha-value>)'
        }
      },
      letterSpacing: {
        'wider-80': 'var(--tracking-wider-80)',
        'tighter-15': 'var(--tracking-tighter-15)',
      }
    },
  },
  plugins: [],
}
