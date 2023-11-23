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
      colors: {
        navbarlink: "#595566", // link-navbar 
        themebackground: "#e9f2ff", // theme-background
        bluetext:"#1B57ED", // blue-text-color
        textcolor: "#595566", // theme-text-color
        btncolor: { // button-color
          light: "#1B57ED", //
          dark: "#272262", // 
        },
      },
      // fontFamily: {
      //   'montserrat': ['Montserrat Alternates', sans-serif;],
      //   'lato': ['Lato', sans-serif],
      //   'cabin': ['Cabin', sans-serif;],
      //   'hind': ['Hind Vadodara', sans-serif;]
      // }
    },
  },
  plugins: [],
}

