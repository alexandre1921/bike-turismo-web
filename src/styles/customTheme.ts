import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    /** Example */
    // body: "Work Sans, sans-serif",
    // heading: "Markazi Text, serif",
  },
  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 5,
        padding: 22,
      },
    },
  },
});

export default customTheme;
