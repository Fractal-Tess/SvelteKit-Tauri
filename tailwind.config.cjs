const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Mono', ...defaultTheme.fontFamily.mono],
        code: ['Fira Code']
      }
    }
  },

  daisyui: {
    themes: [
      {
        // Expand this as peer needs or color theme
        // See https://daisyui.com/docs/themes/ & https://daisyui.com/theme-generator/
        light: require('daisyui/src/colors/themes')['[data-theme=light]'],
        dark: require('daisyui/src/colors/themes')['[data-theme=dark]']
      }
    ]
  },
  plugins: [forms, typography, daisyui]
};

module.exports = config;
