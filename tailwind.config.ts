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
        "heading":["var(--font-gojek","sans-serif"],
        "header1":["text-red font-medium"]
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
