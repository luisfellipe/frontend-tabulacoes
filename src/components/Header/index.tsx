import {
  Flex,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { Darkmode } from "./Darkmode";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      bg="colorBackground.header"
      w="100%"
      height="20"
      mx="auto"
      py="3rem"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} my="2" />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="5"
        ></IconButton>
      )}
      <Logo />

      {/* { isWideVersion && (<SearchBox />)} */}
      {isWideVersion && (
        <Text fontSize="24" fontWeight="bold" color="colorText.headerText">
          Instância - Ailos
        </Text>
      )}

      <Flex align="center" ml="auto">
        <Darkmode />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
