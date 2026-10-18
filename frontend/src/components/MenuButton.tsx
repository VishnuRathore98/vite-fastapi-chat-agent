import { Button, Circle, HStack, Stack, Text, Box } from "@chakra-ui/react";
import { BsStars, BsCheckCircleFill, BsListTask } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Switch } from "./ui/switch";
import { FaMagento } from "react-icons/fa6";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
} from "./ui/menu";
interface MenuItemDetailProps {
  icon: React.ReactElement;
  title: string;
  description?: string;
  element: React.ReactElement;
}

function MenuItemDetail(props: MenuItemDetailProps) {
  const { icon, title, description, element } = props;
  return (
    <HStack
      borderRadius={"lg"}
      px={"2"}
      //   h={"10"}
      // _hover={{
      //   layerStyle: "fill.muted",
      //   textDecor: "none",
      // }}
      w={"full"}>
      <Circle size={"8"} bg={"bg.subtle"}>
        {icon}
      </Circle>
      <Stack gap={"0"} flex={"1"}>
        <Text>{title}</Text>
        <Text fontSize={"xs"} color={"fg.muted"}>
          {description}
        </Text>
      </Stack>
      <Box>{element}</Box>
    </HStack>
  );
}

export const MenuButton = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant='ghost'
          fontSize='md'
          fontWeight={"bold"}
          color={"fg.muted"}>
          Agent Viee <IoIosArrowDown />
        </Button>
      </MenuTrigger>

      <MenuContent minW={"320px"} borderRadius={"2xl"}>
        <MenuItem value='viee-plus'>
          <MenuItemDetail
            icon={<BsStars />}
            title='Viee Plus'
            description='Our smartest and most advanced'
            element={
              <Button variant={"outline"} size={"xs"} borderRadius={"full"}>
                Upgrade
              </Button>
            }
          />
        </MenuItem>
        <MenuItem value='viee-regular'>
          <MenuItemDetail
            icon={<FaMagento />}
            title='Viee Regular'
            description='For regular daily tasks'
            element={<BsCheckCircleFill size={"18"} />}
          />
        </MenuItem>
        <MenuSeparator />
        <MenuItem value='temp-chat' py={"2"}>
          <MenuItemDetail
            icon={<BsListTask />}
            title='Temporary Tasks'
            element={<Switch />}
          />
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};
