import { useState } from "react";
import { Button, Center, Heading, Stack, Field, Input } from "@chakra-ui/react";

export default function Signup() {
  return (
    <Center>
      <form>
        <Heading>Sign-Up</Heading>
        <Field.Root>
          <Field.Label>Full Name</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input type='email' />
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input type='password' />
        </Field.Root>
        <Button type='submit'>Login</Button>
      </form>
    </Center>
  );
}
