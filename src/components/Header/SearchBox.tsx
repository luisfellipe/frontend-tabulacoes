import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// Controlled components são components que controlamos o estado do component atraves do useState
// Uncontrolled components

// Imperativa vs Declarativa

export function SearchBox() {
  // const [search, setSearch] = useState('');

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Debounce
  
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="colorIcon.searchbar"
      position="relative"
      bg="colorBackground.searchbar"
      borderRadius="full"
    >
      <Input
        color="colorInput.searchbar"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'colorInput.searchbarHover' }}
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}