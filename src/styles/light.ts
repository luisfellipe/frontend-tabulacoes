import { extendTheme } from "@chakra-ui/react";

export const light = extendTheme({
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
      editName: "#969CB2",
      skillItem: "#f9f8f8",
      logo: "#f2f2f2",
      inputText: "#09090a",
      spin: "#797d7a",
      instance: "#EEEEF2",
      email: "#9699BB",
      link: "#797d9a",
      linkHover: "#C4C4CC",
      linkActive: "#E1E1E6",
      section: "#797D9A",
      option: "#171f35",
      textModal: "#171f35",
      textButton: "#171f35",
      textSearchModal: "#171f35",
      closeModal: "#171f35",
      selectInstance: "#171f35",
      headerText: "#ffffff",
      titleModal: "#171f35",
      titleTable: "#969CB2",
      textTable: "#363F5F",
      dragIcon: "#363F5F",
      deleteButton: "#363F5F",
      deleteButtonHover: "#ef5350",
      addButton: "#363F5F",
      addButtonHover: "#38a169",
      sideNavTitle: "#797d9a",
      sideNavItem: "#E1E1E6",
      sideNavCloseButton: "#797d9a",
      tabulationTitle: "#7C7C8A",
      tabulationLink: "#C4C4CC"
    },
    colorBackground: {
      editNameHover: "#f0f2f5",
      skillItem: "#3772c2",
      searchbar: "#181823",
      graphics: "#181823",
      sidebarCellphone: "#F0F2F5",
      input: "#f2f2f2",
      inputHover: "#D3D3D3",
      signIn: "#09090a",
      signInButton: "#346cb7",
      signInButtonHover: "#0d47a1",
      modal: "#FFFFFF",
      backgroundButtonModal: "#E6E6E6",
      hoverButtonSelectInstance: "#E6E6E6",
      buttonSelectInstance: "#FFFFFF",
      header: "#022648",
      tabulationBox: "#FFFFFF",
      createTabulationBox: "#FFFFFF",
      typeAndItem: "#F0F2F5",
      createTabulation: "#38a169",
      createTabulationHover: "#1e7346",
      createJsonButton: "#38a169",
      createJsonButtonHover: "#1e7346",
      importButton: "#346cb7",
      importButtonHover: "#0d47a1",
      addButtonHover: "#c4c4cc",
      deleteButtonHover: "#c4c4cc",
      inputLeftAddon: "#E1E1E6",
      paginationItem: "#346cb7",
      paginationItemHover: "#0d47a1"
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto"
  },
  styles: {
    global: {
      body: {
        bg: "#F0F2F5",
        color: "#EEEEF2"
      }
    }
  }
});
