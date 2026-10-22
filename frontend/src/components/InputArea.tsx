import {
  Button,
  Center,
  Circle,
  Heading,
  HStack,
  IconButton,
  Input,
  Span,
  VStack,
} from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "./ui/file-upload";
import {
  FaPaperclip,
  FaArrowUp,
  FaImage,
  FaCode,
  FaSurprise,
} from "react-icons/fa";
import { BsBarChart } from "react-icons/bs";
import { useState, type SetStateAction } from "react";
interface PromptButtonProps {
  icon?: React.ReactElement;
  desc?: string;
}

function PromptButton(props: PromptButtonProps) {
  const { icon, desc } = props;
  return (
    <Button variant={"outline"} borderRadius={"full"}>
      {icon}
      <Span color={"fg"}>{desc}</Span>
    </Button>
  );
}

export default function InputArea() {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  return (
    <VStack gap={"6"}>
      <Heading size={"3xl"}>What can I help you with?</Heading>
      <Center>
        <InputGroup
          minW={"768px"}
          startElement={
            <FileUploadRoot>
              <FileUploadTrigger asChild>
                <FaPaperclip color='fg' />
              </FileUploadTrigger>
              <FileUploadList />
            </FileUploadRoot>
          }
          endElement={
            <IconButton
              fontSize={"2xl"}
              size={"sm"}
              borderRadius={"full"}
              disabled={inputValue.trim() === ""}>
              <FaArrowUp />
            </IconButton>
          }>
          <Input
            placeholder='Message Viee'
            borderRadius={"full"}
            size={"lg"}
            value={inputValue}
            onChange={inputHandler}
          />
        </InputGroup>
      </Center>
      <HStack gap={"2"}>
        <PromptButton icon={<FaImage />} desc='Create Image' />
        <PromptButton icon={<FaCode />} desc='Code' />
        <PromptButton icon={<BsBarChart />} desc='Analyse Data' />
        <PromptButton icon={<FaSurprise />} desc='Surprise' />
        <PromptButton desc='More' />
      </HStack>
    </VStack>
  );
}
