import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Center,
  Heading,
  Stack,
  Field,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";

export default function Signup() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(
      "\nFull name:",
      fullname,
      "\nEmail:",
      email,
      "\nPassword:",
      password,
    );
  }
  return (
    <Center>
      <Stack>
        <form onSubmit={handleSubmit}>
          <Heading>Sign-Up</Heading>
          <Field.Root>
            <Field.Label>Full Name</Field.Label>
            <Input
              type='text'
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Field.Root>
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
          <Button type='submit'>Sign-Up</Button>
        </form>
        <Text>Already have an account?</Text>
        <Link>
          <RouterLink to='/login'>Login</RouterLink>
        </Link>
      </Stack>
    </Center>
  );
}
