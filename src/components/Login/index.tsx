import { SubmitHandler, useForm } from "react-hook-form";
import { Flex, Button, Stack, Box } from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../../components/Form/Input";
import { Logo } from "../../components/Header/Logo";

type SignInFormData = {
  email: string;
  password: string;
};
// Yup schema
const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória")
});

export function Login(props: any) {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log({ session, status });
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  });

  // const { signIn } = useContext(AuthContext);

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    const { email, password } = values;
    console.log("sdfsdf")
    if (status != "authenticated") {
      router.push("/tabulations");
    }
    signIn("okta", { callbackUrl: '/tabulations' }); // redirect rigth to okta widget for authentication
  };
/**
 *  <Stack spacing="4">
            <Input
              type="email"
              label="E-mail"
              error={errors.email}
              {...register("email")}
            ></Input>

            <Input
              type="password"
              label="Senha"
              error={errors.password}
              {...register("password")}
            ></Input>
          </Stack>
 */

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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Box mb="3" textAlign={"center"}>
            <Logo />
          </Box>
          <Button
            type="button"
            mt="6"
            size="lg"
            bg="colorBackground.signInButton"
            _hover={{
              background: "colorBackground.signInButtonHover"
            }}
            isLoading={formState.isSubmitting}
            onClick={() => signIn('okta')}
          >
            Entrar com Okta
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}