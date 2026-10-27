import { useState } from "react";
import {
  Button,
  Center,
  Heading,
  Stack,
  Field,
  Input,
  Link,
} from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("\nEmail:", email, "\nPassword:", password);
  }
  return (
    <Center>
      <Stack>
        <form onSubmit={handleSubmit}>
          <Heading>Log In</Heading>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field.Root>
          <Button type='submit'>Login</Button>
        </form>
      </Stack>
    </Center>
  );
}
