import React, { useState } from "react";
import {
  Button,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type LoginRegisterType = {
  email: string;
  password: string;
};

type State = "login" | "register";

const LoginRegister: React.FC = () => {
  const [state, setState] = useState<State>("login");
  const { register, handleSubmit } = useForm<LoginRegisterType>();

  const handleCreateUser = (formData: LoginRegisterType) =>
    console.log("create user with formData: ", formData);

  const handleLoginUser = (formData: LoginRegisterType) =>
    console.log("login user with formData: ", formData);

  return (
    <VStack>
      <Heading>{state === "login" ? "Login" : "Create account"}</Heading>
      <form
        onSubmit={handleSubmit(
          state === "login" ? handleLoginUser : handleCreateUser
        )}
      >
        <FormLabel>
          Email:
          <Input
            type="text"
            placeholder="email@address.com"
            {...register("email")}
          />
        </FormLabel>
        <FormLabel>
          Password:
          <Input
            type="password"
            placeholder="*********"
            {...register("password")}
          />
        </FormLabel>
        {state === "login" ? (
          <VStack>
            <Button type="submit" colorScheme={"teal"}>
              Login
            </Button>
            <Text>
              New to Activity Timer? Click
              {
                <Text as="u" onClick={() => setState("register")}>
                  here
                </Text>
              }{" "}
              to sign up!
            </Text>
          </VStack>
        ) : (
          <VStack>
            <Button colorScheme={"teal"}>Create account</Button>
            <Text>
              Already have an account? Click
              {
                <Text as="u" onClick={() => setState("login")}>
                  here
                </Text>
              }{" "}
              to sign in!
            </Text>
          </VStack>
        )}
      </form>
    </VStack>
  );
};

export default LoginRegister;
