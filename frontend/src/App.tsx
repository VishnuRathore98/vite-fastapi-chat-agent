import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import { MenuButton } from "./components/MenuButton";
import InputArea from "./components/InputArea";
import { Avatar } from "./components/ui/avatar";

function App() {
  return (
    <Flex minH={"100dvh"}>
      <Sidebar />
      <Box flex={"1"}>
        <Stack h={"full"}>
          <Flex justify={"space-between"} align={"center"} p={"2"}>
            <MenuButton />
            <Avatar
              name='Vishnu'
              size={"sm"}
              colorPalette={"teal"}
              variant={"solid"}
              mr={"3"}
            />
          </Flex>

          <Center flex={"1"}>
            <InputArea />
          </Center>

          <Box pb={"2"}>
            <Center fontSize={"xs"} color={"fg.muted"}>
              AI can make mistakes. Check important info.
            </Center>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default App;
