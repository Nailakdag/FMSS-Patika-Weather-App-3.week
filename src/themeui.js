import { extendBaseTheme } from "@chakra-ui/react";

const theme = extendBaseTheme({
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        border: "none",
        bgImage: "/arkaplan1.jpg",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        placeItems: "center",
        listStyle: "none",
        variant: "unstyled",
        "&:hover": {
          outline: 0,
        },
      },
    },
  },
});

export default theme;
