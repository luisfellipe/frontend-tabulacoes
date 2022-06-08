import { extendTheme } from '@chakra-ui/react';

// * Sobreescrevendo os temas padroes
// LIGHT THEME
export const light = extendTheme({
  colors: {
    colorInput: {
      "searchbar": "white",
      "searchbarHover": "#EEEEF2"
    },
    colorFocus: {
      "inputModal": "#EEEEEE"
    },
    colorIcon: {
      "searchbar": "white",
      "moon": "#346cb7"
    },
    colorText: {
      "instance": "white",
      "email": "#346cb7",
      "link": "#171f35",
      "linkActive": "#92b4cd",
      "section": "#346cb7",
      "option": "#171f35",
      "textTable": "white",
      "titleModal": "#EEEEF2",
      "textModal": "#171f35",
      "textSearchModal": "#EEEEEE",
      "closeModal": "#EEEEEE",
      "selectInstance": "#FFFFFF",
    },
    colorBackground: {
      "searchbar": "#171f35",
      "graphics": "#171f35",
      "sidebarCellphone": "#EEEEEE",
      "input": "#4B0082",
      "inputHover": "#4B0082",
      "signIn": "#1F2829",
      "buttonSignIn": "#171f35",
      "modal": "#171f35",
      "backgroundButtonModal": "#EEEEEE",
      "buttonSelectInstace": "#171f35",
      "hoverButtonSelectInstance": "#241178"
    },
    white: {
      "900": "#E6E6FA"
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: 'white.900',
        color: '#171f35'
      }
    }
  }
})