/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'OldSchoolGrotesk': ['OldSchoolGrotesk'],
      },
      screens: {
        '2xl': { max: '2400px' },
        'xl': { max: '1500px' },
        'lg': { max: '1199px' },
        'md': { max: '1024px' },
        'sm': { max: '991px' },
        'xs': { max: '767px' },
        'xxs': { max: '575px' },
        'mobile': { max: '475px' },
        'small-mobile': { max: '375px' },
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
