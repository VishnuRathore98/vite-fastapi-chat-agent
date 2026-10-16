import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";

function App() {
  return (
    <Flex minH={"100dvh"}>
      <Sidebar />
      <Box>
        <Stack h={"full"}>
          <Box>Top</Box>
          <Center flex={"1"}>Middle</Center>
          <Box pb={"2"}>Bottom</Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default App;
