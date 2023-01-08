import { extendTheme } from "@chakra-ui/react";

const themeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
  brand: {
    900: "#1D5175",
    800: "#88C8F7",
    700: "#3DA8F5",
    600: "#004475",
    500: "#3085C2",
  },
};

export const theme = extendTheme({ colors: themeConfig });
