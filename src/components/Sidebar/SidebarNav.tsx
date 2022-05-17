import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine, RiTruckLine, RiBankCard2Line, RiParentLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return(
    <Stack
      spacing="12" 
      align="flex-start"
    >
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">Instância</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
      </NavSection>
      
      <NavSection title="NAVEGAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/tabulation">Tabulações</NavLink>
      </NavSection>
    </Stack>
  );
}