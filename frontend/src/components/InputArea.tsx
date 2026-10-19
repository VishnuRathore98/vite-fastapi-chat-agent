import {
  Button,
  Center,
  Heading,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "./ui/file-upload";
import { HiUpload } from "react-icons/hi";

export default function InputArea() {
  return (
    <VStack>
      <Heading size={"3xl"}>What can I help you with?</Heading>
      <Center>
        <InputGroup
          minW={"768px"}
          startElement={
            <FileUploadRoot>
              <FileUploadTrigger asChild>
                <HiUpload />
              </FileUploadTrigger>
              <FileUploadList />
            </FileUploadRoot>
          }
          endElement={
            <IconButton
              fontSize={"2xl"}
              size={"sm"}
              borderRadius={"full"}></IconButton>
          }>
          <Input
            placeholder='Message Viee'
            borderRadius={"full"}
            variant={"subtle"}
            size={"lg"}
          />
        </InputGroup>
      </Center>
    </VStack>
  );
}
