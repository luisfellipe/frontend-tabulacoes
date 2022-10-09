import { Flex, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useSession, signIn, signOut } from "next-auth/react"

import { Logo } from "../../components/Header/Logo";

export function Login(props: any) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const handleSignIn = async () => {
    if (status === "authenticated") {
      router.push("/tabulations");
    }
    signIn("okta");
    
  };
  return (
    <Box>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={350}
          bg="colorBackground.signIn"
          p="8"
          borderRadius={8}
          flexDir="column"
          onClick={handleSignIn}
        >
          <Box mb="3" textAlign={"center"}>
            <Logo />
          </Box>
          <Button
            type="submit"
            mt="6"
            size="lg"
            bg="colorBackground.signInButton"
            _hover={{
              background: "colorBackground.signInButtonHover"
            }}
          >
            Login com Okta
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}