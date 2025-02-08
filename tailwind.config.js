/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'OldSchoolGrotesk': ['OldSchoolGrotesk'],
      },
      screens: {
        'small-mobile': '375px',
        'mobile': '475px',
        'xxs': '575px',
        'xs': '767px',
        'sm': '991px',
        'md': '1024px',
        'lg': '1199px',
        'xl': '1500px',
        '1xl': '1800px',
        '2xl': '2400px',
      },
      colors: {
        'main': 'rgba(208,255,113,1)',
        'bg': 'rgba(14,15,17,1)',
        'bg-sub-div': 'rgba(26,27,30,1)',
        'black': '#000000',
        'white': '#FFFFFF',
      },
    },
  },

  plugins: [],
};
