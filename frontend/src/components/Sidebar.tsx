import {
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiSidebar } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { Tooltip } from "./ui/tooltip";
import { FaMagento } from "react-icons/fa6";
import { TbAiAgents } from "react-icons/tb";
import { GrUpgrade } from "react-icons/gr";
export default function Sidebar() {
  return (
    <Box bg={"bg.muted"} w={"260px"}>
      <Stack px={"3"} py={"2"} h={"full"}>
        {/* Top icons */}
        <Flex justify={"space-between"}>
          <Tooltip
            content={"Close Sidebar"}
            positioning={{ placement: "right" }}
            showArrow>
            <IconButton
              variant={"ghost"}
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              borderRadius={"xl"}>
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
        </Flex>
        {/* Links */}
        <Stack px={"2"} gap={"0"} flex={"1"}>
          <Link href='#' variant={"plain"} _hover={{ textDecor: "none" }}>
            <HStack
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              px={"1"}
              h={"10"}
              borderRadius={"lg"}
              w={"100%"}>
              <Circle size={"6"} bg={"bg"} borderWidth={"1px"}>
                <FaMagento />
              </Circle>
              <Text fontSize={"sm"} fontWeight={"md"}>
                Agent Viee
              </Text>
            </HStack>
          </Link>
          <Link href='#' variant={"plain"} _hover={{ textDecor: "none" }}>
            <HStack
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              px={"1"}
              h={"10"}
              borderRadius={"lg"}
              w={"100%"}>
              <Circle size={"6"} bg={"bg"} borderWidth={"1px"}>
                <TbAiAgents />
              </Circle>
              <Text fontSize={"sm"} fontWeight={"md"}>
                Sub Agents
              </Text>
            </HStack>
          </Link>
        </Stack>

        {/* Upgrade button */}
        <Link href='#' variant={"plain"} _hover={{ textDecor: "none" }}>
          <HStack
            px={"3"}
            h={"10"}
            borderRadius={"lg"}
            w={"100"}
            _hover={{
              layerStyle: "fill.muted",
              textDecor: "none",
            }}>
            <Circle size={"6"} bg={"bg"} borderWidth={"1px"}>
              <GrUpgrade />
            </Circle>
            <Stack gap={"0"}>
              <Text fontSize={"sm"}>Upgrade plan</Text>
              <Text fontSize={"xs"} color={"fg.muted"}>
                More access to the best features
              </Text>
            </Stack>
          </HStack>
        </Link>
      </Stack>
    </Box>
  );
}
