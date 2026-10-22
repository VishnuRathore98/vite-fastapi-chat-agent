import { Box, Center, Flex, IconButton, Stack } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import { MenuButton } from "./components/MenuButton";
import InputArea from "./components/InputArea";
import { Avatar } from "./components/ui/avatar";
import { useState } from "react";
import { Tooltip } from "./components/ui/tooltip";
import { FiSidebar } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <Flex minH={"100dvh"}>
      {sidebarVisible ? <Sidebar toggleSidebar={toggleSidebar} /> : ""}
      <Box flex={"1"} transition={"ease-in-out"}>
        <Stack h={"full"}>
          <Flex justify={"space-between"} align={"center"} p={"2"}>
            {sidebarVisible ? (
              <MenuButton />
            ) : (
              <Flex justify={"space-between"}>
                <Tooltip content={"Open Sidebar"} showArrow>
                  <IconButton
                    variant={"ghost"}
                    _hover={{
                      layerStyle: "fill.muted",
                      textDecor: "none",
                    }}
                    borderRadius={"xl"}
                    onClick={toggleSidebar}>
                    <FiSidebar color={"fg.muted"} />
                  </IconButton>
                </Tooltip>
                <Tooltip content={"New Chat"} showArrow>
                  <IconButton
                    variant={"ghost"}
                    _hover={{
                      layerStyle: "fill.muted",
                      textDecor: "none",
                    }}
                    borderRadius={"xl"}>
                    <FaRegEdit color={"fg.muted"} />
                  </IconButton>
                </Tooltip>
                <MenuButton />
              </Flex>
            )}

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
