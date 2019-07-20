// src/theme.js
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

export default {
  primary: {
    base: colors.indigo.base,
    darken1: colors.indigo.darken2
  },
  secondary: colors.blue,
  // All keys will generate theme styles,
  // Here we add a custom `tertiary` color
  tertiary: colors.purple.base,
  accent: colors.shades.black
}
