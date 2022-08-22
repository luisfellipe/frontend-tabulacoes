import { Flex, Img, Text } from "@chakra-ui/react";

import notFound from "../../../assets/images/not-found.svg";

export function NotFound(props) {
  return (
    <Flex
      color="colorText.textTable"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Img
        src={notFound.src}
        alt="Not found"
        width="70px"
        mt="25px"
        style={{
          filter: "invert(60%)"
        }}
      />
      <Text fontSize={25} mt={6}>
        Nenhum dado encontrado...
      </Text>
      <Text fontSize={16} mt={2}>
        Para iniciar a criação de um novo content basta clicar em{" "}
        <strong style={{ color: props.color }}>Criar JSON </strong>ou importar
        um arquivo JSON
      </Text>
    </Flex>
  );
}
