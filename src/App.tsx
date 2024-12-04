import {
  Box,
  Center,
  Circle,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  ExploreGPTIcon,
  NewChatIcon,
  SidebarIcon,
  SmallGPTIcon,
  UpgradeIcon,
} from "./icons/sidebar-icons";
import { Tooltip } from "./components/ui/tooltip";
import { ChatGPTMenu } from "./ChatGPTMenu";
import { Avatar } from "./components/ui/avatar";

function App() {
  return (
    <Flex minH={"100dvh"}>
      <Box bg={"bg.muted"} w={"260px"}>
        <Stack h={"full"} px={3} py={2}>
          <Flex justify={"space-between"}>
            <Tooltip
              showArrow
              content="Close sidebar"
              positioning={{ placement: "right" }}
            >
              <IconButton variant={"ghost"}>
                <SidebarIcon fontSize={"2xl"} color={"fg.muted"} />
              </IconButton>
            </Tooltip>
            <Tooltip showArrow content="New chat">
              <IconButton variant={"ghost"}>
                <NewChatIcon fontSize={"2xl"} color={"fg.muted"} />
              </IconButton>
            </Tooltip>
          </Flex>
          <Stack px={2} gap={0} flex={1}>
            <HStack
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              px={1}
              h={10}
              borderRadius={"lg"}
              w={"100%"}
            >
              <Link href="#" variant={"plain"} _hover={{ textDecor: "none" }}>
                <Circle size={6} bg={"bg"} borderWidth={"1px"}>
                  <SmallGPTIcon fontSize={"md"} />
                </Circle>
                <Text fontSize={"sm"} fontWeight={"md"}>
                  ChatGPT
                </Text>
              </Link>
            </HStack>
            <HStack
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              px={1}
              h={10}
              borderRadius={"lg"}
              w={"100%"}
            >
              <Link href="#" variant={"plain"} _hover={{ textDecor: "none" }}>
                <ExploreGPTIcon fontSize={"md"} />
                <Text fontSize={"sm"} fontWeight={"md"}>
                  Explore GPTs
                </Text>
              </Link>
            </HStack>
          </Stack>
          <Link
            href="#"
            _hover={{ textDecor: "none", layerStyle: "fill.muted" }}
            borderRadius="lg"
            py={2}
            px={1}
          >
            <HStack>
              <Circle size={8} fontSize="lg" borderWidth="1px">
                <UpgradeIcon />
              </Circle>
              <Stack gap={0} fontWeight="medium">
                <Text fontSize="sm">Upgrade plan</Text>
                <Text fontSize="xs" color="fg.subtle">
                  More access to the best models
                </Text>
              </Stack>
            </HStack>
          </Link>
        </Stack>
      </Box>
      <Box flex={1}>
        <Stack h="full">
          <Flex justify="space-between" align="center" p={2}>
            <ChatGPTMenu />
            <Avatar
              name="George"
              size="sm"
              colorPalette="teal"
              variant="solid"
              mr={3}
            />
          </Flex>
          <Center flex="1">Middle</Center>
          <Box pb="2">Bottom</Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default App;
