const { guessProductionMode } = require("@ngneat/tailwind");
process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './apps/**/*.{html,ts,css,scss,sass,less,styl}',
        './libs/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      colors: {
        primary: 'hsl(0, 36%, 70%)'
      },
      extend: {
        backgroundImage: {
         image: "url('./apps/base-apparel-coming-soon-page/src/assets/img/bg-pattern-desktop.svg')",
        }
      }
    },

    variants: {
      extend: {},
    },
    plugins: [],
};
