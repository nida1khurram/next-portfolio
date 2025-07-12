import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#1a1a1a',
        primary: '#0ea5e9',  
        secondary: '#8b5cf6',
        tertiary: '#ec4899',
        content: '#fafafa',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(99, 102, 241, 0.15) 50%, rgba(139, 92, 246, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
