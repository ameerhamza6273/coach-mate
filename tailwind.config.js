/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./storyblok/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px 4px 0px 0px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        navbarlink: "#595566", // link-navbar 
        themebackground: "#e9f2ff", // theme-background
        bluetext: "#1B57ED", // blue-text-color
        textcolor: "#595566", // theme-text-color
        cardsbackground: "rgba(27, 87, 237, 0.07)",
        cardsbtnbg: "#F3F3F3",
        cardsbtntext: "#353535",
        btncolor: { // button-color
          light: "#1B57ED", //
          dark: "#272262", // 
        },
      },
    // fontFamily: {
    //   'montserrat': ["'Montserrat', sans-serif"],
    //   'lato': ['Lato'],
    //   'garamond': ['Garamond']
    // },
    },
  },
  plugins: [],
}

