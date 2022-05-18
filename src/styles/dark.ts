import { extendTheme } from '@chakra-ui/react';

// * Sobreescrevendo os temas padroes
// DARK THEME
export const dark = extendTheme({
  colors: {
    colorIcon: {
      "searchbar": "#B3B5C6",
      "moon": "white"
    },
    colorText: {
      "instance": "#EEEEF2",
      "email": "#9699BB",
      "link": "#B3B5C6",
      "linkActive": "#346cb7",
      "section": "#797D9A",
      "option": "#171f35",
      "textTable": "white"
    },
    colorBackground: {
      "searchbar": "#181823",
      "graphics": "#181823",
      "sidebarCellphone": "#181823",
      "input": "#181823",
      "inputHover": "#181823",
      "signIn": "#1F2829",
      "buttonSignIn": "#171f35"
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: '#171f35',
        color: '#EEEEF2'
      }
    }
  }
})