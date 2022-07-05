import { Button, Stack, useDisclosure } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { ModalComponent } from "../Modal";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing="12" align="flex-start">
      <ModalComponent isOpen={isOpen} onClose={onClose} />

      {/* DESATIVADO POR ENQUANTO */}
      {/* <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} onClick={onOpen} href="">Instância</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
      </NavSection> */}

      <NavSection title="NAVEGAÇÃO">
        <NavLink
          icon={RiInputMethodLine}
          href="/tabulations"
          textColor="colorText.link"
          ml="16px"
          _hover={{
            textDecoration: "none",
            color: "colorText.linkHover",
          }}
        >
          Tabulações
        </NavLink>
      </NavSection>

      {/* DESATIVADO POR ENQUANTO  */}
      {/* <Button 
        w="100%" 
        onClick={onOpen} 
        color="colorText.selectInstance" 
        background="colorBackground.buttonSelectInstace"
        _hover={{ background: "colorBackground.hoverButtonSelectInstance" }}
      >
        Selecionar instância
      </Button> */}
    </Stack>
  );
}
