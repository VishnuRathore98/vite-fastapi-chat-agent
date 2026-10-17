import {
  Button,
  Circle,
  HStack,
  Menu,
  Portal,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
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
      _hover={{
        layerStyle: "fill.muted",
        textDecor: "none",
      }}>
      <Circle size={"8"} bg={"bg.subtle"}>
        {icon}
      </Circle>
      <Stack gap={"0"}>
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
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant='ghost'
          fontSize='lg'
          fontWeight={"bold"}
          color={"fg.muted"}>
          Agent Viee <IoIosArrowDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
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
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
