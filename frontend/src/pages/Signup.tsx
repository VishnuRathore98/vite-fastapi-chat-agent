import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
import { toaster } from "@/components/ui/toaster";
import { signup } from "@/api/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup({
        full_name: fullname,
        email: email,
        password: password,
      });
      toaster.create({
        title: "Account created",
        description: "You can log in now.",
        type: "success",
      });
      navigate("/login");
    } catch (err) {
      toaster.create({
        title: "Signup failed",
        description: "Account creation failed, try again",
        type: "error",
      });
      if (err instanceof Error) {
        setError(err.message);
        // console.log(err);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
    // console.log(
    //   "\nFull name:",
    //   fullname,
    //   "\nEmail:",
    //   email,
    //   "\nPassword:",
    //   password,
    // );
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
          <Button type='submit' loading={loading}>
            Sign-Up
          </Button>
          {error && (
            <Text color={"red.500"} whiteSpace={"pre-line"}>
              {error}
            </Text>
          )}
        </form>
        <Text>Already have an account?</Text>
        <Link>
          <RouterLink to='/login'>Login</RouterLink>
        </Link>
      </Stack>
    </Center>
  );
}
