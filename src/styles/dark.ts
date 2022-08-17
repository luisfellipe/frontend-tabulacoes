import { extendTheme } from "@chakra-ui/react";

export const dark = extendTheme({
  colors: {
    colorIcon: {
      searchbar: "#B3B5C6",
      moon: "white"
    },
    colorFocus: {
      inputModal: "#171f35",
      inputBorder: "#323238",
      inputFocus: "#D3D3D3",
      inputText: "#09090a"
    },
    colorText: {
      skillItem: "#F1F1F1",
      logo: "#f2f2f2",
      inputText: "#09090a",
      instance: "#EEEEF2",
      email: "#9699BB",
      link: "#edf2f7",
      linkHover: "#C4C4CC",
      linkActive: "#E1E1E6",
      section: "#797D9A",
      option: "#171f35",
      textModal: "#E1E1E6",
      textSearchModal: "#171f35",
      closeModal: "#E1E1E6",
      selectInstance: "#171f35",
      headerText: "#ffffff",
      titleModal: "#E1E1E6",
      titleTable: "#f1f1f1",
      textTable: "#C4C4CC",
      dragIcon: "#C4C4CC",
      deleteButton: "#C4C4CC",
      deleteButtonHover: "#ef5350",
      addButton: "#C4C4CC",
      addButtonHover: "#38a169",
      sideNavTitle: "#E1E1E6",
      sideNavItem: "#E1E1E6",
      sideNavCloseButton: "#797d9a"
    },
    colorBackground: {
      skillItem: "#346cb7",
      searchbar: "#181823",
      graphics: "#181823",
      sidebarCellphone: "#202024",
      input: "#f2f2f2",
      inputHover: "#D3D3D3",
      signIn: "#09090a",
      signInButton: "#346cb7",
      signInButtonHover: "#0d47a1",
      modal: "#29292E",
      backgroundButtonModal: "#E6E6E6",
      hoverButtonSelectInstance: "#E6E6E6",
      buttonSelectInstance: "#FFFFFF",
      header: "#0D0D0D",
      tabulationBox: "#0D0D0D",
      createTabulationBox: "#0D0D0D",
      typeAndItem: "#202024",
      createTabulation: "#38a169",
      createTabulationHover: "#1e7346",
      createJsonButton: "#38a169",
      createJsonButtonHover: "#1e7346",
      importButton: "#346cb7",
      importButtonHover: "#0d47a1",
      addButtonHover: "#333333",
      deleteButtonHover: "#333333",
      inputLeftAddon: "#29292E"
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto"
  },
  styles: {
    global: {
      body: {
        bg: "#262626",
        color: "#EEEEF2"
      }
    }
  }
});
