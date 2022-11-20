
const plugin = require("tailwindcss/plugin");


/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'raleway': ['Raleway', 'sans-serif'],
                sora: ['Sora', 'sans-serif'],
                inter: ['Inter', 'sans-serif'] ,
                sans: ['Raleway', 'sans-serif'],
              },
                
            
            colors: {
                brand: '#F67A24',
                hover: '#F9A66D',
                disabled: '#EEEEED',
                onclick: '#7B3D12',
                onerror: '#A41F1F',
                black: '#222222',
                orange: '#F67A24',
                lightOrange: '#FDE4D3',
                brown: '#7B3D12',
            },
        },
        plugins:[plugin(({ addUtilities }) => {
          addUtilities({
            ".no-scrollbar::-webkit-scrollbar": {
              display: "none",
            },
            ".no-scrollbar": {
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            },
        
          });
        }),]
    }
  }

