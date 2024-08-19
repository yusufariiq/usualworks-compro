/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary':'#2EC2EF',
      'secondary':'#235A86',
      'third':'#0B2F3A',
      'fade-grey': '#F5F5F5',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      height: {
        '72': '72px',
        '540' : '540px',
      },
      fontSize: {
        'head1': '64px',     
        'head2': '48px',  
        'head3': '40px',   
        'regular': '20px', 
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/backgroundpic.png')",
      },
    },
  },
  plugins: [],
}

