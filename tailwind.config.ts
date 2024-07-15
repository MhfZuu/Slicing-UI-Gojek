import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        'padding' : '30px'
      },
      borderRadius:{
        '6xl' : '70px'
      },
      fontFamily:{
        "maison-bold":["var(--font-maison-bold)","sans-serif"],
        "maison-demi":["var(--font-maison-demi)","sans-serif"],
        "maison-book":["var(--font-maison-book)","sans-serif"],
        "maisonext-xbold":["var(--font-maisonext-xtrabold)", "sans-serif"]
      },
      color:{
        "white":"#ffffff",
        "hijaugojek": "#00880d"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
