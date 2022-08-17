import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";

import { SidebarNav } from "./SidebarNav";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="colorBackground.sidebarCellphone" p="8">
            <DrawerCloseButton mt="6" color="colorText.sideNavCloseButton" />
            <DrawerHeader>
              <Text color="colorText.sideNavTitle">Navegação</Text>
            </DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
