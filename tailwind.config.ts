import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              background: '#4F46E5',
              borderRadius: '8px',
              padding: '16px',
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: '36px',
              lineHeight: '40px',
              color: '#FFFFFF',
            },

            h3: {
              borderLeft: '8px solid #4F46E5',
              padding: '16px',
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: '28px',
              lineHeight: '32px',
            },

            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },

            iframe: {
              width: '100%',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
