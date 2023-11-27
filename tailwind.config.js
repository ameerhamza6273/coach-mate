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
    fontFamily: {
      'montserrat': ['Montserrat Alternates'],
      'vadodara': ['Hind Vadodara'],
      'lato': ['Lato'],
      'sans': ['Open Sans'],
      // 'prompt': ['Prompt'],
      'garamond': ['Garamond'],
      'cabin': ['Cabin'],
      'sans': ['ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        navbarlink: "#595566", // link-navbar 
        themebackground: "#e9f2ff", // theme-background
        bluetext: "#1B57ED", // blue-text-color
        textcolor: "#595566", // theme-text-color
        headingclr: "#181818", // headings-color
        cardsbackground: "rgba(27, 87, 237, 0.07)", // cards-bg-color
        cardsbtnbg: "#F3F3F3",  // cards-btn-bg-color
        cardsbtntext: "#353535",  // cards-btn-text-color
        btncolor: { // button-color
          light: "#1B57ED", //
          dark: "#272262", // 
        },
      },
    },
  },
  plugins: [],
}

