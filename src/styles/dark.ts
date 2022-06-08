import { extendTheme } from '@chakra-ui/react';

// * Sobreescrevendo os temas padroes
// DARK THEME
export const dark = extendTheme({
  colors: {
    colorIcon: {
      "searchbar": "#B3B5C6",
      "moon": "white"
    },
    colorFocus: {
      "inputModal": "#171f35"
    },
    colorText: {
      "instance": "#EEEEF2",
      "email": "#9699BB",
      "link": "#B3B5C6",
      "linkActive": "#346cb7",
      "section": "#797D9A",
      "option": "#171f35",
      "textTable": "white",
      "titleModal": "#171f35",
      "textModal": "#171f35",
      "textSearchModal": "#171f35",
      "closeModal": "#171f35",
      "selectInstance": "#171f35",
    },
    colorBackground: {
      "searchbar": "#181823",
      "graphics": "#181823",
      "sidebarCellphone": "#181823",
      "input": "#181823",
      "inputHover": "#181823",
      "signIn": "#1F2829",
      "buttonSignIn": "#171f35",
      "modal": "#FFFFFF",
      "backgroundButtonModal": "#E6E6E6",
      "buttonSelectInstace": "#FFFFFF",
      "hoverButtonSelectInstance": "#E6E6E6"
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